import type {PriceSliderProps} from "./price-slider";

import React from "react";

import PriceSlider from "./price-slider";

export default function Component(props: PriceSliderProps) {
  return (
    <div className="my-auto flex flex-col gap-2">
      <h3 className="text-medium font-medium leading-8 text-default-600">为了更好的提升您的健康状况，请选择一个短期健康目标</h3>
      <PriceSlider
        aria-label="Pricing Filter"
        range={{
          min: 0,
          defaultValue: [80, 200],
          max: 120,
          step: 1,
        }}
        {...props}
      />
    </div>
  );
}
