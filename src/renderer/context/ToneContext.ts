import * as React from "react"
import Tone from "tone"

export const ToneContext = React.createContext({ Tone })

export const useTone = () => {
  const Tone = React.useContext(ToneContext)
  return Tone
}
