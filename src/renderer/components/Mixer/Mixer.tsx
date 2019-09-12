import * as React from "react"
import MixerStyles from "./MixerStyles"

const Scale = () => {
  return (
    <div className="scale">
      <div className="scale-tick" style={{ bottom: "0%" }}></div>
      <div className="scale-tick" style={{ bottom: "1%" }}></div>
      <div className="scale-tick" style={{ bottom: "2%" }}></div>
      <div className="scale-tick" style={{ bottom: "3%" }}></div>
      <div className="scale-tick" style={{ bottom: "5%" }}></div>
      <div className="scale-tick" style={{ bottom: "9%" }}></div>
      <div className="scale-tick" style={{ bottom: "15%" }}></div>
      <div className="scale-tick" style={{ bottom: "24%" }}></div>
      <div className="scale-tick" style={{ bottom: "39%" }}></div>
      <div className="scale-tick" style={{ bottom: "63%" }}></div>
      <div className="scale-tick" style={{ bottom: "100%" }}></div>
    </div>
  )
}

//TODO fix the fader slide motion. right now its terrible.

const Fader = ({ volume, onClick, onDrag }) => {
  const FaderRef = React.useRef(null)
  const FaderThumbRef = React.useRef(null)

  const [faderPos, setFaderPos] = React.useState("0%")

  const handleOnClick = (e: MouseEvent) => {
    const { top, bottom } = FaderRef.current.getBoundingClientRect()
    const { clientY: mouseY } = e

    const range = bottom - top
    const correctedStartValue = mouseY - top
    let percentage = (correctedStartValue * 100) / range
    console.log(`${percentage}%`)
    let currentVal = parseFloat(percentage)

    setFaderPos(`${percentage}%`)
  }

  const handleMousedown = (e: MouseEvent) => {}

  return (
    <div className="fader" ref={FaderRef} onMouseDown={handleOnClick}>
      <div className="fader-track">
        <div
          ref={FaderThumbRef}
          className="fader-thumb"
          style={{ top: `${faderPos}` }}
        ></div>
      </div>
      <Scale />
    </div>
  )
}

interface ChannelStrip {
  label: string
  volume: number
}

const ChannelStrip: React.FC<ChannelStrip> = ({ label, volume }) => {
  return (
    <div className="channelstrip">
      <div className="label" style={{ color: "rgb(0, 255, 0)" }}>
        {label}
      </div>
      <div className="horizontal-meter">
        <div
          className="activity"
          style={{ clipPath: "inset(0px, 5.99701%, 0px, 0px)" }}
        ></div>
      </div>
      <button className="active">Mute</button>
      <button className="solo">Solo</button>
      <Fader volume={volume} onClick={() => console.log("click")} />
    </div>
  )
}

const Mixer = ({ tracks }) => {
  const toggleMute = () => {}
  const toggleSolo = () => {}

  return (
    <MixerStyles>
      <div className="mixer" id="app">
        {tracks.map(track => {
          return <ChannelStrip label={track.name} volume={track.volume} />
        })}
      </div>
    </MixerStyles>
  )
}

export default Mixer
