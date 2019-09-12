import * as React from "react"
import styled from "styled-components"
import { MidiContext } from "../context/midiContext"

const Light = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 100%;
  background: ${props => (props.active ? "#A00" : "#F00")};
  transition: all 0.2s linear;
`

const MidiLight = () => {
  const { active } = React.useContext(MidiContext)

  return <Light active={active} />
}

export default MidiLight
