import { useState } from "react";
import { BodyModel } from "@/components/BodyModel";
import { MeasurementSlider } from "@/components/MeasurementSlider";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

type Unit = "imperial" | "metric";

const Index = () => {
  const navigate = useNavigate();
  const [unit, setUnit] = useState<Unit>("metric");
  const [measurements, setMeasurements] = useState({
    shoulder: 92,
    bust: 88,
    waist: 71,
    hips: 97,
  });

  const toggleUnit = () => {
    setUnit((prev) => (prev === "imperial" ? "metric" : "imperial"));
    if (unit === "imperial") {
      // Convert to metric
      setMeasurements({
        shoulder: Math.round(measurements.shoulder * 2.54),
        bust: Math.round(measurements.bust * 2.54),
        waist: Math.round(measurements.waist * 2.54),
        hips: Math.round(measurements.hips * 2.54),
      });
    } else {
      // Convert to imperial
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
          <h1 className="text-4xl font-light text-gray-800 mb-8">
            Body Measurement
          </h1>

          <div className="bg-gray-200 py-12 px-8">
            <div className="max-w-6xl mx-auto grid lg:grid-cols-[300px,1fr] gap-12 items-center">
              {/* 3D Model Section */}
              <div className="bg-[#3a3a3a] h-[420px] flex items-center justify-center">
                <BodyModel measurements={measurements} />
              </div>

              {/* Controls Section */}
              <div className="space-y-6">
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
                  Your Body Type Result
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

export default Index;
