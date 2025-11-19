import { useRef } from "react";
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

function HumanBody({ measurements }: BodyModelProps) {
  const bodyRef = useRef<THREE.Group>(null);
  const obj = useLoader(OBJLoader, "/models/person.obj");

  // Reference measurements (average female in cm)
  const referenceMeasurements = {
    shoulder: 92,
    bust: 88,
    waist: 71,
    hips: 97,
  };

  // Calculate scale factors
  const shoulderScale = measurements.shoulder / referenceMeasurements.shoulder;
  const bustScale = measurements.bust / referenceMeasurements.bust;
  const waistScale = measurements.waist / referenceMeasurements.waist;
  const hipScale = measurements.hips / referenceMeasurements.hips;

  // Apply deformation to the geometry
  const deformedObj = obj.clone();
  
  deformedObj.traverse((child) => {
    if (child instanceof THREE.Mesh) {
      const geometry = child.geometry.clone();
      const positionAttribute = geometry.getAttribute('position');
      
      if (positionAttribute) {
        const positions = positionAttribute.array;
        
        // Find the Y bounds of the model
        let minY = Infinity;
        let maxY = -Infinity;
        for (let i = 1; i < positions.length; i += 3) {
          const y = positions[i];
          minY = Math.min(minY, y);
          maxY = Math.max(maxY, y);
        }
        
        const yRange = maxY - minY;
        
        for (let i = 0; i < positions.length; i += 3) {
          const x = positions[i];
          const y = positions[i + 1];
          const z = positions[i + 2];
          
          // Normalize y to 0-1 range based on actual model bounds
          const normalizedY = (y - minY) / yRange;
          
          let scaleX = 1;
          let scaleZ = 1;
          
          // Shoulder region: 0.78 - 0.85 (upper torso, below neck)
          const shoulderCenter = 0.815;
          const shoulderRange = 0.035;
          if (Math.abs(normalizedY - shoulderCenter) < shoulderRange) {
            const influence = 1 - (Math.abs(normalizedY - shoulderCenter) / shoulderRange);
            scaleX = 1 + (shoulderScale - 1) * influence;
            scaleZ = 1 + (shoulderScale - 1) * influence;
          }
          
          // Bust region: 0.68 - 0.78 (chest area)
          // Only apply to torso, not arms (limit by distance from center)
          const bustCenter = 0.73;
          const bustRange = 0.05;
          const distanceFromCenter = Math.sqrt(x * x + z * z);
          if (Math.abs(normalizedY - bustCenter) < bustRange && distanceFromCenter < 0.25) {
            const influence = 1 - (Math.abs(normalizedY - bustCenter) / bustRange);
            const bustInfluence = (bustScale - 1) * influence;
            scaleX = scaleX + bustInfluence;
            scaleZ = scaleZ + bustInfluence;
          }
          
          // Waist region: 0.58 - 0.66 (narrowest part of torso)
          // Only apply to torso, not arms (limit by distance from center)
          const waistCenter = 0.62;
          const waistRange = 0.04;
          if (Math.abs(normalizedY - waistCenter) < waistRange && distanceFromCenter < 0.20) {
            const influence = 1 - (Math.abs(normalizedY - waistCenter) / waistRange);
            const waistInfluence = (waistScale - 1) * influence;
            scaleX = scaleX + waistInfluence;
            scaleZ = scaleZ + waistInfluence;
          }
          
          // Hip region: 0.48 - 0.58 (pelvic area, widest point)
          // Only apply to torso, not arms (limit by distance from center)
          const hipCenter = 0.53;
          const hipRange = 0.05;
          if (Math.abs(normalizedY - hipCenter) < hipRange && distanceFromCenter < 0.25) {
            const influence = 1 - (Math.abs(normalizedY - hipCenter) / hipRange);
            const hipInfluence = (hipScale - 1) * influence;
            scaleX = scaleX + hipInfluence;
            scaleZ = scaleZ + hipInfluence;
          }
          
          // Apply scaling to X and Z coordinates
          positions[i] = x * scaleX;
          positions[i + 2] = z * scaleZ;
        }
        
        positionAttribute.needsUpdate = true;
        geometry.computeVertexNormals();
      }
      
      child.geometry = geometry;
    }
  });

  return (
    <group ref={bodyRef} scale={5} position={[0, -1, 0]}>
      <primitive object={deformedObj}>
        <meshStandardMaterial color="#FFD4C4" roughness={0.6} metalness={0.1} />
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
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 10, 5]} intensity={1} />
        <directionalLight position={[-5, 5, -5]} intensity={0.5} />
        <pointLight position={[0, 5, 0]} intensity={0.5} />
        
        {/* Body */}
        <HumanBody measurements={measurements} />
      </Canvas>
    </div>
  );
};
