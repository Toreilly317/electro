import * as React from "react";
import Module from "./Module";
import Jack from "../common/Jack";
import RotaryKnob from "../common/Knob";

const VCF = () => {
  return (
    <Module name="VCF-1">
      <div>
        <Jack input name="Sig 1" />
        <Jack input name="Sig 2" />
        <Jack input name="Sig 3" />
      </div>
      <div>
        <RotaryKnob name={"Freq"} />
        <RotaryKnob name={"Reso"} />
      </div>
      <div>
        <Jack output name="Out" />
      </div>
      <div>
        <Jack input name="Mod 1" />
        <Jack input name="Mod 2" />
        <Jack input name="Mod 3" />
      </div>
    </Module>
  );
};

export default VCF;
