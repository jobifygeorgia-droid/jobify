"use client";

import { useState } from "react";
import { CustomRangeSlider } from "./ui/rangeSlider";

function valuetext(value: number) {
  return `${value}°C`;
}

type RangeFieldT = {
  max?: number;
  min?: number;
  step?: number;
};

const RangeField: React.FC<RangeFieldT> = (props) => {
  const { max = 100, min = 0, step = 10 } = props;

  const [value, setValue] = useState<number[]>(() => [step, max - step]);

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(() => [step, max - step]);
  };

  return (
    <div>
      <CustomRangeSlider
        value={value}
        defaultValue={value}
        onChange={handleChange}
        aria-label="Always visible"
        getAriaValueText={valuetext}
        min={min}
        max={max}
        step={step}
        size="medium"
        valueLabelDisplay="on"
      />
    </div>
  );
};

export default RangeField;
