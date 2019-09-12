import * as React from "react";
import { StoreContext } from "../context/store";

const useMute = (gainNode: GainNode) => {
  const { ctx } = React.useContext(StoreContext);
  const [prevGain, setPrevGain] = React.useState<number>(gainNode.gain.value);

  const mute = () => {
    gainNode.gain.setTargetAtTime(0, ctx.currentTime, 0.015);
  };

  return { mute };
};

export default useMute;
