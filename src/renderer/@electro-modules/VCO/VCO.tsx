import * as React from "react";
import { Module, Jack, RotaryKnob } from "../../@electro-ui";

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
