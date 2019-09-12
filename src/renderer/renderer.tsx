import * as React from "react";
import { render } from "react-dom";
import Oscillator from "./modules/Oscillator";
import Mixer4 from "./modules/Mixer4";
import Synth from "./modules/Synth";
import { Provider } from "./context/store";
import styled from "styled-components";
import Mixer8 from "./modules/Mixer8";
import VCF from "./modules/VCF";
import VCA from "./modules/VCA";
import "./styles.css";

const Rack = styled.div`
  background: #333333;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;

  & + div {
    flex: 1 1 0;
  }
`;

function App() {
  return (
    <div className="App">
      <Provider>
        <Rack>
          <Oscillator />
          <Oscillator />
          <VCF />
          <VCF />
          <VCA />
          <VCA />
          <Mixer4 />
        </Rack>
      </Provider>
    </div>
  );
}

const rootElement = document.getElementById("app");
render(<App />, rootElement);
