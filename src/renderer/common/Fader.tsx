import * as React from "react";
import Jack from "./Jack";
import { IRangeInput } from "./interfaces";
import styled from "styled-components";
import useGain from "../hooks/useGain";

const FaderStyles = styled.div`
  display: flex;
  align-items: center;
`;

interface Fader extends IRangeInput {
  name?: string;
}

const Fader: React.FC<Fader> = ({ name }) => {
  const { ctx, gainNode, adjustGainTo, mute, connectGainToMaster } = useGain(
    true
  );

  return (
    <FaderStyles>
      <Jack input name={name} component={gainNode} />
      <input
        type="range"
        min={0.0}
        max={1}
        step={0.01}
        onChange={e => adjustGainTo(e.target.value)}
      />
      <button onClick={() => mute()}>M</button>
      <button onClick={() => mute()}>S</button>
    </FaderStyles>
  );
};

export default Fader;
