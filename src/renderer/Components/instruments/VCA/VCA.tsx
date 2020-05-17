import * as React from "react";
import { Module, Jack, RotaryKnob } from "../../Common";

export const VCA = () => {
  return (
    <Module name="VCA">
      <div>
        <Jack name="Sig 1" />
        <Jack name="Sig 2" />
        <Jack name="Sig 3" />
      </div>
      <div>
        <RotaryKnob
          name={"Gain"}
          min={0}
          max={1}
          value={0.5}
          onChange={(e) => {
            console.log(e);
          }}
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
