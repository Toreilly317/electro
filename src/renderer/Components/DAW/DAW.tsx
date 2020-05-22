import * as React from "react";
import styled from "styled-components";
import Rack from "../Rack/Rack";
import { Container } from "../Common";

import Browser from "../Browser/Browser";

const Layout = styled.div`
  display: flex;
`;

const DAW: React.FC = () => {
  return (
    <Layout>
      <Browser />
      <Rack />
    </Layout>
  );
};

export default DAW;
