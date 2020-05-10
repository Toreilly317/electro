import * as React from "react";
import { Jack } from "../Jack";
import { FaderStyles } from "./FaderStyles";
import { IFaderProps } from "./interfaces";

export const Fader: React.FC<IFaderProps> = ({ connectTo }) => {
  return (
    <FaderStyles>
      <Jack name="fader" />
      <input type="range" min={0.0} max={1} step={0.01} onChange={(e) => {}} />
      <button>M</button>
      <button>S</button>
    </FaderStyles>
  );
};

export default Fader;
