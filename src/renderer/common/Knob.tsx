import * as React from "react";
import styled from "styled-components";
import { Knob } from "react-rotary-knob";

const KnobStyles = styled.div`
  transform: scale(0.8);
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  font-size: 1rem;
`;

interface RotaryKnob {
  name?: string;
  min?: number;
  max?: number;
  value: number;
  onChange: (val: number) => void;
}

const RotaryKnob: React.FC<RotaryKnob> = ({
  name,
  min,
  max,
  onChange,
  value
}) => {
  return (
    <KnobStyles>
      <Knob min={min} max={max} onChange={onChange} value={value} />
      <div>{name}</div>
    </KnobStyles>
  );
};

export default RotaryKnob;
