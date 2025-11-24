import { useState } from "react";
import { MeasurementSlider } from "@/components/MeasurementSlider";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { BodyModel } from "@/components/BodyModel";

type Unit = "imperial" | "metric";

const Scan = () => {
  const navigate = useNavigate();
  const [unit, setUnit] = useState<Unit>("metric");
  const [measurements, setMeasurements] = useState({
    shoulder: 92,
    bust: 88,
    waist: 71,
    hips: 97,
  });

  const toggleUnit = () => {
    const isCurrentlyImperial = unit === "imperial";
    setUnit(isCurrentlyImperial ? "metric" : "imperial");

    if (isCurrentlyImperial) {
      // Convert from imperial to metric
      setMeasurements({
        shoulder: Math.round(measurements.shoulder * 2.54),
        bust: Math.round(measurements.bust * 2.54),
        waist: Math.round(measurements.waist * 2.54),
        hips: Math.round(measurements.hips * 2.54),
      });
    } else {
      // Convert from metric to imperial
      setMeasurements({
        shoulder: Math.round(measurements.shoulder / 2.54),
        bust: Math.round(measurements.bust / 2.54),
        waist: Math.round(measurements.waist / 2.54),
        hips: Math.round(measurements.hips / 2.54),
      });
    }
  };

  const updateMeasurement = (key: keyof typeof measurements, value: number) => {
    setMeasurements((prev) => ({ ...prev, [key]: value }));
  };

  const bodyConfig = unit === "imperial"
    ? { min: 20, max: 60, unit: "inches" }
    : { min: 60, max: 150, unit: "cm" };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      
      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-8 py-8">
          <div className="bg-gray-200 py-12 px-8">
            <div className="max-w-6xl mx-auto grid lg:grid-cols-[350px,1fr] gap-12 items-start">
              {/* 3D Model Section */}
              <div className="bg-[#3a3a3a] h-[500px] flex items-center justify-center rounded-lg overflow-hidden">
                <BodyModel measurements={measurements} />
              </div>

              {/* Controls Section */}
              <div className="space-y-6">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-3xl font-light text-gray-800">
                    Body Type Visualizer
                  </h2>
                  <Button onClick={toggleUnit} variant="outline">
                    Switch to {unit === "imperial" ? "Metric" : "Imperial"}
                  </Button>
                </div>

                <MeasurementSlider
                  label="Shoulder"
                  value={measurements.shoulder}
                  unit={bodyConfig.unit}
                  min={bodyConfig.min}
                  max={bodyConfig.max}
                  onChange={(value) => updateMeasurement("shoulder", value)}
                />

                <MeasurementSlider
                  label="Bust"
                  value={measurements.bust}
                  unit={bodyConfig.unit}
                  min={bodyConfig.min}
                  max={bodyConfig.max}
                  onChange={(value) => updateMeasurement("bust", value)}
                />

                <MeasurementSlider
                  label="Waist"
                  value={measurements.waist}
                  unit={bodyConfig.unit}
                  min={bodyConfig.min}
                  max={bodyConfig.max}
                  onChange={(value) => updateMeasurement("waist", value)}
                />

                <MeasurementSlider
                  label="Hips"
                  value={measurements.hips}
                  unit={bodyConfig.unit}
                  min={bodyConfig.min}
                  max={bodyConfig.max}
                  onChange={(value) => updateMeasurement("hips", value)}
                />

                <Button 
                  onClick={() => navigate("/result")}
                  className="w-full bg-[hsl(0,65%,40%)] hover:bg-[hsl(0,65%,35%)] text-white py-6 text-base"
                >
                  Calculate Body Type
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Scan;