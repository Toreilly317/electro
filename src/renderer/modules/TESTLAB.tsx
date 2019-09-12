import * as React from "react";
import Module from "./Module";
import { StoreContext } from "../context/store";
import ctx from "../lib/main";

const TestLab = () => {
  const [volume, setVolume] = React.useState<number>();

  React.useLayoutEffect(() => {
    const ctx = new AudioContext();
    const osc = ctx.createOscillator();
    const gainNode = ctx.createGain();
    gainNode.gain.value = 0.5;
    setVolume(gainNode.gain.value);

    osc.connect(gainNode);
    osc.frequency.value = 100;

    osc.start();
  }, []);

  React.useEffect(() => {
    return () => ctx.close();
  }, [volume]);

  const handleVolumeChange = e => {
    gainNode.gain.setTargetAtTime(volume, ctx.currentTime, 0.015);
  };

  return (
    <Module name="TestLab">
      <input
        type="range"
        min={0}
        max={1}
        step={0.01}
        value={volume}
        onChange={handleVolumeChange}
      />
    </Module>
  );
};

export default TestLab;
