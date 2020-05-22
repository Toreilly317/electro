import * as React from "react";
import styled from "styled-components";
import { Icon } from "../Common";

const BrowserBarStyles = styled.div`
  display: flex;
  flex-direction: column;
  background: svg {
    width: 50px;
    height: 50px;
    margin-bottom: 1rem;
    cursor: pointer;
    padding: 0.5rem;
  }
`;

export const BrowserBar: React.FC = () => {
  return (
    <BrowserBarStyles>
      <Icon icon="musical-note" />

      <Icon icon="synthesizer" />

      <Icon icon="drum-1" />

      <Icon icon="user" />
    </BrowserBarStyles>
  );
};
