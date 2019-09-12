import * as React from "react";
import Fader from "../common/Fader";
import styled from "styled-components";
import Module from "./Module";

const MixerStyles = styled.div``;

const Mixer = () => {
  return (
    <Module name={"Mixer4"}>
      <MixerStyles>
        <Fader name="Ch. 1" />
        <Fader name="Ch. 2" />
        <Fader name="Ch. 3" />
        <Fader name="Ch. 4" />
      </MixerStyles>
    </Module>
  );
};

export default Mixer;
