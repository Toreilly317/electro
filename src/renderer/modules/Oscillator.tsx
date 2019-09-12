import * as React from "react";
import Module from "./Module";
import Jack from "../common/Jack";
import RotaryKnob from "../common/Knob";
import useOscillator from "../hooks/useOscillator";

const Oscillator = () => {
  const { oscillator, setFrequency, setDetune } = useOscillator({
    frequency: 50,
    detune: 0,
    type: "sine"
  });

  return (
    <Module name={"VCO-1"}>
      <div>
        <Jack output name={"V/Oct"} component={oscillator} />
      </div>
      <div>
        <RotaryKnob
          onChange={setFrequency}
          min={20}
          max={2000}
          name={"Course"}
          value={oscillator.frequency.value}
        />
        <RotaryKnob
          value={oscillator.detune.value}
          onChange={setDetune}
          min={0}
          max={100}
          name={"Fine"}
        />
      </div>
      <div>
        <Jack input name={"FM"} component={oscillator.frequency} />
        <Jack input name={"SYNC"} component={oscillator.frequency} />
        <Jack input name={"PWM"} component={oscillator.frequency} />
      </div>
      <div>
        <Jack output name={"Tri"} component={oscillator} />
        <Jack output name={"Saw"} component={oscillator} />
        <Jack output name={"Sqr"} component={oscillator} />
      </div>
    </Module>
  );
};

export default Oscillator;
