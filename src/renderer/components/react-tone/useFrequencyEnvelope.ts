import * as React from "react"
import * as Tone from "tone"

const FreqEnvelope = new Tone.FrequencyEnvelope()

const [FreqEnvState] = React.useState({
  attack: 0.2,
  baseFrequency: "C2",
  octaves: 4
})
