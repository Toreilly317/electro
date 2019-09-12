import * as React from "react"
import styled from "styled-components"
import RotaryKnob from "../RotaryKnob"
import StepCounter from "../StepCounter"

const SamplerStyles = styled.div`
  padding: 1rem;
  background: rgb(92, 88, 88);
  color: white;
  font-size: 2rem;
  padding-top: 1rem;

  button {
    width: 80px;
    height: 30px;
    margin: 1rem;
    box-shadow: 1px 1px #ccc;
    outline: none;
    background: #ddd;
  }
  .screen {
    background-color: rgb(84, 133, 96);
    color: black;
    margin: 0 auto;
    padding: 1rem;
    text-align: center;
  }

  .bank-buttons {
    display: flex;
    justify-content: flex-end;
    padding: 0.5rem 0;
  }
`
const Instrument = styled.div`
  min-height: 100px;
  width: 100vw;
`

const ScreenArea = styled.div`
  display: flex;
  align-items: space-around;

  & div:not(:last-child) {
    margin-right: 1rem;
  }

  & > div {
    flex: 1 1 0;
  }
`

const Screen = () => {
  return <div className="screen">This is the loaded sample</div>
}

const MPC = () => {
  return (
    <Instrument>
      <SamplerStyles>
        <div className="top-btn-row"></div>
        <ScreenArea>
          <Screen />
          <Screen />
        </ScreenArea>

        <div>JPD 2000</div>
        <div className="bank-buttons">
          <button>A</button>
          <button>B</button>
          <button>C</button>
          <button>D</button>
        </div>

        <div>
          <RotaryKnob />
          <RotaryKnob />
          <RotaryKnob />
          <RotaryKnob />
        </div>

        <div>
          <StepCounter />
          <StepCounter />
          <StepCounter />
          <StepCounter />
        </div>
        <div className="pad">
          <div className="pad"></div>
        </div>
      </SamplerStyles>
    </Instrument>
  )
}

export default MPC
