import * as React from "react";
import { render } from "react-dom";
import styled from "styled-components";
import "./styles.css";
import { VCO, Samplr } from "./@electro-modules";


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
      <Rack>
        <Samplr />
      </Rack>
    </div>
  );
}

const rootElement = document.getElementById("app");
render(<App />, rootElement);
