import * as React from "react";
import { Samplr, VCO, VCA } from "../instruments";
import styled from "styled-components";

const RackStyles = styled.div`
  min-height: 100vh;
  align-items: flex-start;
`;

const Rack: React.FC = () => {
  return (
    <RackStyles>
      <Samplr />
      <div>
        <VCO />
        <VCA />
      </div>
    </RackStyles>
  );
};

export default Rack;
