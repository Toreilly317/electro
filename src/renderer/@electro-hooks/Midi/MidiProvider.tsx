import * as React from "react"


type MidiMessageCommand = number
type MidiMessageNote = number
type MidiMessageVelocity = number

type MidiMessage = [MidiMessageCommand, MidiMessageNote, MidiMessageVelocity]

interface MidiContext {
    noteOn: MidiMessage
    noteOff: MidiMessage
}

const intitialState = {
    noteOn: [],
    noteOff: []
}

const MidiContext = React.createContext(intitialState);