import * as React from "react";
import { Module, Jack, RotaryKnob } from "../../Common";
import Knob from "react-rotary-knob";

export const VCO = () => {
  return (
    <Module name="VCO">
      <div>
        <Jack name="Sig 1" />
        <Jack name="Sig 2" />
        <Jack name="Sig 3" />
      </div>
      <div>
        <RotaryKnob
          name={"Gain"}
          value={0.5}
          onChange={() => {}}
          min={1}
          max={2}
        />
      </div>
      <div>
        <Jack name="Out" />
      </div>
      <div>
        <Jack name="Mod 1" />
        <Jack name="Mod 2" />
        <Jack name="Mod 3" />
      </div>
    </Module>
  );
};
