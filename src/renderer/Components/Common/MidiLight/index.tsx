import * as React from "react"
import styled from "styled-components"


interface Props {
    active: boolean
    color: string
}

const MidiLightStyles = styled.div<Props>`
   .light {
       width: 20px;
       height: 20px;
       background: ${props => props.active ? props.color : "white"}
   }
`

const MidiLight: React.FC<Props> = ({ active, color }) => {
    return (
        <MidiLightStyles active={active} color={color}>
            <div className="light"></div>
        </MidiLightStyles>
    )
}

export default MidiLight