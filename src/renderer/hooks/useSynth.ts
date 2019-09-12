import * as React from "react";
import { StoreContext } from "../context/store";

import useOscillator from "./useOscillator";
import useGain from "./useGain";
import { useSynthArgs, Synth } from "../interfaces";

const useSynth = (config: useSynthArgs): Synth => {
  const { ctx } = React.useContext(StoreContext);
  const Oscillator = useOscillator(config.oscillator);
  const Gain = useGain({ volume: 0.01 });

  const cleanUp = () => {
    Gain.gainNode.disconnect(ctx.destination);
    Oscillator.oscillator.disconnect(Gain.gainNode);
  };

  React.useEffect(() => {
    Gain.gainNode.connect(ctx.destination);
    Oscillator.oscillator.connect(Gain.gainNode);
    Oscillator.oscillator.start();

    return () => cleanUp();
  }, []);

  return {
    ...Oscillator,
    ...Gain
  };
};

export default useSynth;
