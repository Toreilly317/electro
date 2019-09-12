import * as React from "react"
import { Knob } from "react-rotary-knob"

interface RotaryKnob {
  min?: number
  max?: number
  value: number
  onChange: (val: number) => any
  step?: number
  onStart?: () => any
  onEnd?: () => any
}

const RotaryKnob: React.FC<RotaryKnob> = ({
  min = 0,
  max = 100,
  value,
  onChange,
  step
}) => {
  const [currentVal, setCurrentValue] = React.useState(value)

  const handleValueChange = (val: number) => {
    setCurrentValue(val)
    onChange(val)
  }

  return (
    <Knob
      onChange={(val: number) => handleValueChange(val)}
      min={min}
      max={max}
      step={step}
      value={currentVal}
      style={{ display: "inline-block" }}
      unlockDistance={50}
    />
  )
}

export default RotaryKnob
