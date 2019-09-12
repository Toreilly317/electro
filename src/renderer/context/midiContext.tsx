import * as React from "react"

export const MidiContext = React.createContext({})

const NOTE_ON = 149
const NOTE_OFF = 133

export const MidiProvider = ({ children }) => {
  const [midiMessage, setMidiMessage] = React.useState({})
  const [active, setActive] = React.useState(false)

  const checkMidiAccess = () => {
    if (navigator.requestMIDIAccess) {
      console.log("This browser supports WebMIDI!")
      return true
    } else {
      console.log("WebMIDI is not supported in this browser.")
      return false
    }
  }
  const startMidiEngine = onMidiMessage => {
    navigator.requestMIDIAccess().then(onMIDISuccess, onMIDIFailure)

    function onMIDISuccess(midiAccess) {
      for (var input of midiAccess.inputs.values())
        input.onmidimessage = getMIDIMessage
    }

    function getMIDIMessage(midiMessage) {
      onMidiMessage(midiMessage)
    }

    function onMIDIFailure() {
      console.log("Could not access your MIDI devices.")
    }
  }

  const onMidiMessage = message => {
    const { data } = message
    if (data[0] === NOTE_ON) {
      setActive(!active)
    } else if (data[0] === NOTE_OFF) {
      setActive(!active)
    }
    console.log(...data)
  }

  React.useEffect(() => {
    checkMidiAccess() && startMidiEngine(onMidiMessage)
  }, [])

  return (
    <MidiContext.Provider value={{ midiMessage, active }}>
      {children}
    </MidiContext.Provider>
  )
}
