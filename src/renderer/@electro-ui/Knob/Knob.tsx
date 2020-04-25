import * as React from "react";
import { KnobStyles } from "./KnobStyles";
import { IRotaryKnob } from "./interfaces";
const { Knob } = require("react-rotary-knob");

export const RotaryKnob: React.FC<IRotaryKnob> = ({
  name,
  min,
  max,
  onChange,
  value,
}) => {
  return (
    <KnobStyles>
      <Knob min={min} max={max} onChange={onChange} value={value} />
      <div>{name}</div>
    </KnobStyles>
  );
};

export default RotaryKnob;
