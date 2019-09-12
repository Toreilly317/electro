import * as React from "react";
import Fader from "../common/Fader";
import styled from "styled-components";
import Module from "./Module";

const MixerStyles = styled.div`
  display: flex;
`;

const Mixer = () => {
  return (
    <Module name={"Mixer-8"}>
      <MixerStyles>
        <div style={{ marginRight: "1rem" }}>
          <Fader name="Ch. 1" />
          <Fader name="Ch. 2" />
          <Fader name="Ch. 3" />
          <Fader name="Ch. 4" />
        </div>
        <div>
          <Fader name="Ch. 5" />
          <Fader name="Ch. 6" />
          <Fader name="Ch. 7" />
          <Fader name="Ch. 8" />
        </div>
      </MixerStyles>
    </Module>
  );
};

export default Mixer;
