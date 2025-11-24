import { useState, useEffect } from "react";
import { Slider } from "@/components/ui/slider";
import { Input } from "@/components/ui/input";
import { HelpCircle } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface MeasurementSliderProps {
  label: string;
  value: number;
  unit: string;
  min: number;
  max: number;
  step?: number;
  onChange: (value: number) => void;
  isPredicted?: boolean;
}

export const MeasurementSlider = ({
  label,
  value,
  unit,
  min,
  max,
  step = 1,
  onChange,
  isPredicted = false,
}: MeasurementSliderProps) => {
  const [inputValue, setInputValue] = useState<string>(String(Math.round(value)));

  useEffect(() => {
    setInputValue(String(Math.round(value)));
  }, [value]);

  const handleSliderChange = (values: number[]) => {
    onChange(values[0]);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const commitInput = () => {
    if (inputValue.trim() === "") {
      setInputValue(String(Math.round(value)));
      return;
    }

    const num = Number(inputValue);
    if (isNaN(num)) {
      setInputValue(String(Math.round(value)));
      return;
    }

    const clamped = Math.min(Math.max(num, min), max);
    onChange(clamped);
    setInputValue(String(Math.round(clamped)));
  };

  const handleInputBlur = () => {
    commitInput();
  };

  const handleInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      commitInput();
    }
  };

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <label className="text-sm font-medium text-foreground">
          {label}:
        </label>
        <div className="flex items-center gap-2">
          <Input
            type="number"
            value={inputValue}
            onChange={handleInputChange}
            onBlur={handleInputBlur}
            onKeyDown={handleInputKeyDown}
            className="w-16 h-8 text-center"
            min={min}
            max={max}
          />
          <span className="text-sm text-muted-foreground">{unit}</span>
          {isPredicted && (
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <span className="text-xs text-primary flex items-center gap-1">
                    PREDICTED <HelpCircle className="w-3 h-3" />
                  </span>
                </TooltipTrigger>
                <TooltipContent>
                  <p>This value is predicted based on other measurements</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          )}
        </div>
      </div>

      <Slider
        value={[value]}
        onValueChange={handleSliderChange}
        min={min}
        max={max}
        step={step}
        className="w-full"
      />
    </div>
  );
};
