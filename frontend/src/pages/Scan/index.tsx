import { useState } from "react";
import { BodyModel } from "@/components/BodyModel";
import { MeasurementSlider } from "@/components/MeasurementSlider";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useMutation } from "@tanstack/react-query";

type Unit = "imperial" | "metric";

const API_URL = import.meta.env.VITE_API_URL ?? "http://localhost:5000/api";

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

  const bodyConfig =
    unit === "imperial"
      ? { min: 20, max: 60, unit: "inches" }
      : { min: 60, max: 150, unit: "cm" };

  const measurementMutation = useMutation({
    mutationKey: ["create-measurement"],
    mutationFn: async () => {
      // convert ke cm kalau user lagi pakai imperial
      const factor = unit === "imperial" ? 2.54 : 1;

      const payload = {
        shoulders: measurements.shoulder * factor,
        bust: measurements.bust * factor,
        waist: measurements.waist * factor,
        hips: measurements.hips * factor,
        sessionId: String(Date.now()),
      };

      const res = await fetch(`${API_URL}/measurements`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        throw new Error("Failed to create measurement");
      }

      return res.json();
    },
    onSuccess: (data: any) => {
      console.log("Saved measurement:", data);
      const bodyType = data.bodyType as string;

      if (bodyType === "hourglass") {
        navigate("/body-types/hourglass", { state: { measurement: data } });
      } else if (bodyType === "pear") {
        navigate("/body-types/pear", { state: { measurement: data } });
      } else if (bodyType === "apple") {
        navigate("/body-types/apple", { state: { measurement: data } });
      } else if (bodyType === "rectangle") {
        navigate("/body-types/rectangle", { state: { measurement: data } });
      } else if (bodyType === "inverted-triangle") {
        navigate("/body-types/inverted-triangle", {
          state: { measurement: data },
        });
      } else {
        navigate("/result", { state: { measurement: data } });
      }
    },
  });

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
                {/* Optional: button toggle unit */}
                {/* <Button variant="outline" onClick={toggleUnit}>
                  Switch to {unit === "metric" ? "Imperial" : "Metric"}
                </Button> */}

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
                  onClick={() => measurementMutation.mutate()}
                  disabled={measurementMutation.isPending}
                  className="w-full bg-[hsl(0,65%,40%)] hover:bg-[hsl(0,65%,35%)] text-white py-6 text-base"
                >
                  {measurementMutation.isPending
                    ? "Analyzing..."
                    : "Your Body Type Result"}
                </Button>

                {measurementMutation.isError && (
                  <p className="text-red-500 text-sm">
                    {(measurementMutation.error as Error).message}
                  </p>
                )}
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
