import * as React from "react";
import { KnobStyles } from "./KnobStyles";
import { IRotaryKnob } from "./interfaces";
import Knob, { KnobProps } from "react-rotary-knob";

interface Props extends KnobProps {
  name: string;
}

export const RotaryKnob: React.FC<Props> = ({
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
