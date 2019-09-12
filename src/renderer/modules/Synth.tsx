import * as React from "react";
import Module from "./Module";
import Jack from "../common/Jack";
import { Knob } from "react-rotary-knob";
import useSynth from "../hooks/useSynth";
import { useSynthArgs } from "../interfaces";

const synthConfig: useSynthArgs = {
  oscillator: { frequency: 50, detune: 0, type: "sine" },
  gain: { volume: 1 }
};

const Synth = () => {
  const {
    oscillator,
    frequency,
    setFrequency,
    setDetune,
    gainLevel,
    setGainLevel
  } = useSynth(synthConfig);

  console.log(Synth);

  return (
    <Module name={"Synth-1"}>
      <div>
        <Jack output name={"Sin"} component={oscillator} />
        <Jack output name={"Tri"} component={oscillator} />
        <Jack output name={"Saw"} component={oscillator} />
        <Jack output name={"Sqr"} component={oscillator} />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          margin: "1rem 0"
        }}
      >
        <div>
          <div>
            <span>{frequency}</span>{" "}
            <Knob onChange={setFrequency} min={20} max={2000} />
          </div>
        </div>

        <Knob onChange={setDetune} min={0} max={200} />
        <input
          type="range"
          value={gainLevel}
          min={0}
          max={1}
          step={0.1}
          onChange={e => setGainLevel(e.target.value)}
        />
      </div>
      <div>
        <Jack input name={"FM1"} component={oscillator.frequency} />
        <Jack input name={"FM2"} component={oscillator.frequency} />
        <Jack input name={"Reset"} />
        <Jack input name={"PWM"} />
      </div>
    </Module>
  );
};

export default Synth;
