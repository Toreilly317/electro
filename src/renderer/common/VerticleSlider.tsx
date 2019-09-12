import * as React from "react";
import styled from "styled-components";
import { IRangeInput } from "./interfaces";

const VerticleSlider = styled.div``;

const Fader: React.FC<IRangeInput> = ({
  onChange,
  value,
  min = 0.0,
  max = 1.0,
  step = 0.01
}: IRangeInput) => {
  return (
    <VerticleSlider>
      <div className="rotation-wrapper-outer">
        <div className="rotation-wrapper-inner">
          <input
            value={value}
            type="range"
            min={min}
            max={max}
            step={step}
            onChange={onChange}
            className="element-to-rotate"
          />
        </div>
      </div>
    </VerticleSlider>
  );
};

export default Fader;
