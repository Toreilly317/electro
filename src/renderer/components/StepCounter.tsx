import * as React from "react"
import styled from "styled-components"

interface StepCounter {
  default: number
  value: number
  min: number
  max: number
  onchange: (val: number) => any
}

const NumberInputNoButtons = styled.input`
  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`

const StepCounterStyles = styled.div`
 
  }
`

// {default, value, min, max, onChange }
const StepCounter: React.FC<StepCounter> = () => {
  const [val, setVal] = React.useState<number>(0)

  const incrementCount = () => {
    setVal(val + 1)
  }

  const decrementCount = () => {
    setVal(val - 1)
  }

  const handleValueChange = e => {
    const { value } = e.target.value

    if (value.length >= 2) {
    }
    const parsedValue = parseFloat(e.target.value)

    //todo: Find better regex for this

    setVal(value)
    onChange(value)
  }
  return (
    <StepCounterStyles>
      <input onChange={e => handleValueChange(e)} value={val} />
      <div>
        <button onClick={incrementCount}>&#9650;</button>
        <button onClick={decrementCount}>&#9660;</button>
      </div>
    </StepCounterStyles>
  )
}

export default StepCounter
