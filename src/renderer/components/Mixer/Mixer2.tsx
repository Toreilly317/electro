import * as React from "react"

interface ChannelStrip {
  label: string
  volume: number
  track: any
  Tone: any
}

const ChannelStrip: React.FC<ChannelStrip> = ({ Tone, label, track }) => {
  const Gain = new Tone.Gain()
  const { instrument } = track
  Gain.toMaster()
  instrument.connect(Gain)

  console.log(track)

  const [volume, setVolume] = React.useState()

  const handleOnChange = (e: React.FormEvent<HTMLInputElement>) => {
    setVolume(e.currentTarget.value)

    track.instrument.volume.value = volume
  }
  return (
    <div>
      {/* <div>{label}</div>
      <div>
        <input
          type="range"
          min={0}
          max={10}
          step={1}
          value={volume}
          onChange={handleOnChange}
        />
        <strong>MONO VOLUME{volume}</strong>
      </div> */}
    </div>
  )
}

const Mixer = ({ tracks, Tone }: any) => {
  const toggleMute = () => {}
  const toggleSolo = () => {}

  return (
    <div>
      {tracks.map((track: any) => {
        return (
          <ChannelStrip
            Tone={Tone}
            label={track.name}
            volume={track.volume}
            track={track}
            key={track.name}
          />
        )
      })}
    </div>
  )
}

export default Mixer
