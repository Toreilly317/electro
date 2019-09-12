import { ToneContext } from "../../context/ToneContext"
import * as React from "react"
import * as Tone from "Tone"
import MidiLight from "../MidiLight"

interface MonoSynth {
  registerInstrument: () => any | void
}

const MonoSynth: React.FC<MonoSynth> = ({ registerInstrument }) => {
  const Tone = React.useContext(ToneContext)
  const [gain, setGain] = React.useState(-12)

  const Mono = new Tone.Tone.MonoSynth()
  const Gain = new Tone()
  Mono.connect(Gain)

  const handleVolumeChange = e => {
    console.log(e.target.value)
    setGain(parseFloat(e.target.value))
    Mono.oscillator.volume.value = gain
  }

  return (
    <div>
      <MidiLight />
      <div>{gain}</div>
      <input
        type="range"
        min={0}
        max={1}
        step={0.1}
        value={gain}
        onChange={handleVolumeChange}
      />
      <button onClick={() => Mono.triggerAttack("C4")}>Play</button>
    </div>
  )
}

export default MonoSynth
