import { useRef, useMemo } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import * as THREE from "three";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader.js";

interface BodyModelProps {
  measurements: {
    shoulder: number;
    bust: number;
    waist: number;
    hips: number;
  };
}

// Helper function for smooth interpolation
const smoothStep = (edge0: number, edge1: number, x: number) => {
  const t = Math.max(0, Math.min(1, (x - edge0) / (edge1 - edge0)));
  return t * t * (3 - 2 * t);
};

// Creates a "bell curve" of influence on the Y-axis for smooth blending
const createInfluenceFunction = (center: number, range: number) => {
  return (y: number) => {
    const distance = Math.abs(y - center);
    if (distance > range) return 0;
    return 1 - smoothStep(0, range, distance);
  };
};

function HumanBody({ measurements }: BodyModelProps) {
  const bodyRef = useRef<THREE.Group>(null);
  const obj = useLoader(OBJLoader, "/models/person.obj");

  const deformedObj = useMemo(() => {
    const clonedObj = obj.clone();
    
    const referenceMeasurements = { shoulder: 92, bust: 88, waist: 71, hips: 97 };
    const shoulderScale = measurements.shoulder / referenceMeasurements.shoulder;
    const bustScale = measurements.bust / referenceMeasurements.bust;
    const waistScale = measurements.waist / referenceMeasurements.waist;
    const hipScale = measurements.hips / referenceMeasurements.hips;
    const overallScale = (shoulderScale + bustScale + waistScale + hipScale) / 4;

    clonedObj.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        const geometry = child.geometry.clone();
        const positionAttribute = geometry.getAttribute('position');
        
        if (positionAttribute) {
          const positions = positionAttribute.array as Float32Array;
          
          let minY = Infinity, maxY = -Infinity;
          for (let i = 1; i < positions.length; i += 3) {
            minY = Math.min(minY, positions[i]);
            maxY = Math.max(maxY, positions[i]);
          }
          const yRange = maxY - minY;
          if (yRange === 0) return;

          // Define influence functions for all body parts, including the HEAD
          const headInfluence = createInfluenceFunction(0.95, 0.10); // A single function for the whole head
          const shoulderInfluence = createInfluenceFunction(0.82, 0.1);
          const bustInfluence = createInfluenceFunction(0.70, 0.12);
          const waistInfluence = createInfluenceFunction(0.58, 0.1);
          const hipInfluence = createInfluenceFunction(0.48, 0.12);
          const thighInfluence = createInfluenceFunction(0.38, 0.1);

          // Define a target scale for the head, based on overall frame and shoulder width
          const headScale = overallScale * 0.7 + shoulderScale * 0.3;

          for (let i = 0; i < positions.length; i += 3) {
            let x = positions[i];
            let y = positions[i + 1];
            let z = positions[i + 2];
            
            const normalizedY = (y - minY) / yRange;
            const distanceFromCenter = Math.sqrt(x * x + z * z);
            
            let finalScale = 1.0;

            // --- Explicitly handle regions outside the torso and head ---
            if (normalizedY < 0.30) {
              // LOWER LEGS & FEET: Scale based on leg size, but taper off towards the feet.
              const legTaper = smoothStep(0.0, 0.30, normalizedY);
              const legScale = overallScale + (hipScale - overallScale) * 0.5;
              finalScale = overallScale * (1 - legTaper) + legScale * legTaper;
            } else {
              // --- HEAD & TORSO: Use a unified blending logic ---
              
              // Get influence from each body part at this height
              const hInf = headInfluence(normalizedY);
              const sInf = shoulderInfluence(normalizedY);
              const bInf = bustInfluence(normalizedY);
              const wInf = waistInfluence(normalizedY);
              const hipInf = hipInfluence(normalizedY);
              const tInf = thighInfluence(normalizedY);
              
              // Calculate a blended scale factor for the torso and head
              const totalInfluence = hInf + sInf + bInf + wInf + hipInf + tInf;
              const blendedScale = totalInfluence > 0
                ? (hInf * headScale + sInf * shoulderScale + bInf * bustScale + wInf * waistScale + hipInf * hipScale + tInf * hipScale) / totalInfluence
                : 1;

              // The final scale is a blend of the overall body scale and the local blended scale
              finalScale = overallScale * 0.4 + blendedScale * 0.6;
              
              // Apply limb falloff for arms and upper legs
              const limbFalloff = smoothStep(0.15, 0.35, distanceFromCenter);
              finalScale = finalScale * (1 - limbFalloff) + overallScale * limbFalloff;
            }
            
            // Apply scaling to X and Z coordinates
            positions[i] = x * finalScale;
            positions[i + 2] = z * finalScale;
            
            // Apply subtle gravity only to the torso region
            if (normalizedY > 0.45 && normalizedY < 0.75) {
              const gravityEffect = (finalScale - 1) * 0.02;
              positions[i + 1] = y - gravityEffect * yRange;
            }
          }
          
          positionAttribute.needsUpdate = true;
          geometry.computeVertexNormals();
        }
        
        child.geometry = geometry;
      }
    });
    return clonedObj;
  }, [measurements, obj]);

  return (
    <group ref={bodyRef} scale={5} position={[0, -1, 0]}>
      <primitive object={deformedObj}>
        <meshStandardMaterial color="#FFD4C4" roughness={0.7} metalness={0.05} />
      </primitive>
    </group>
  );
}

export const BodyModel = ({ measurements }: BodyModelProps) => {
  return (
    <div className="w-full h-full bg-model-bg rounded-lg overflow-hidden">
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 15, 25]} />
        <OrbitControls 
          enableZoom={true}
          enablePan={false}
          minDistance={15}
          maxDistance={40}
        />
        
        {/* Lighting */}
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 10, 5]} intensity={0.8} />
        <directionalLight position={[-5, 5, -5]} intensity={0.4} />
        
        {/* Body */}
        <HumanBody measurements={measurements} />
      </Canvas>
    </div>
  );
};