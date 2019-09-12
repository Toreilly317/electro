import * as React from "react";
import { StoreContext } from "../context/store";
import usePersist from "../hooks/usePersist";
import { useOnMount } from "./lifecycles";
import { useOscillatorArgs, OscillatorComponent } from "../interfaces";

const useOscillator = (config: useOscillatorArgs): OscillatorComponent => {
  const { ctx } = React.useContext(StoreContext);

  const oscillator = usePersist(ctx.createOscillator());

  const [frequency, setFreq] = React.useState<number>(config.frequency);
  const [detune, setDetune] = React.useState<number>(config.detune);

  const configureOscillator = () => {
    oscillator.frequency.value = frequency;
    oscillator.detune.value = frequency;
  };

  useOnMount(configureOscillator);

  const handleSetFreq = (frequency: number) => {
    setFreq(frequency);
    oscillator.frequency.setTargetAtTime(frequency, ctx.currentTime, 0.015);
  };

  const handleSetDetune = (detuneValue: number) => {
    setDetune(detuneValue);
    oscillator.detune.setTargetAtTime(detuneValue, ctx.currentTime, 0.015);
  };

  return {
    oscillator,
    frequency,
    detune,
    setFrequency: handleSetFreq,
    setDetune: handleSetDetune,
    type: oscillator.type
  };
};

export default useOscillator;
