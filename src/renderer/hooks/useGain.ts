import * as React from "react";
import { StoreContext } from "../context/store";
import usePersist from "../hooks/usePersist";
import useMute from "./useMute";
import { useGainArgs, GainComponent } from "../interfaces";

const useGain = ({ volume = 1 }: useGainArgs): GainComponent => {
  const { ctx } = React.useContext(StoreContext);
  const [gainLevel, setGainLevel] = React.useState<number>(volume);
  const gainNode = usePersist(ctx.createGain());
  const mute = useMute(gainNode);

  const handleGainchange = (gainLevel: number) => {
    setGainLevel(gainLevel);
    gainNode.gain.setTargetAtTime(gainLevel, ctx.currentTime, 0.015);
  };

  return {
    mute,
    gainLevel,
    setGainLevel: handleGainchange,
    gainNode
  };
};

export default useGain;
