import * as React from "react";
import styled from "styled-components";
import Rack from "../Rack/Rack";
import FileBrowser from "../FileBrowser/FileBrowser";
import SampleData from "../FileBrowser/sampleData";

const Layout = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 6fr 2fr;
`;

const DAW: React.FC = () => {
  return (
    <Layout>
      <FileBrowser folders={SampleData} />
      <Rack />
      <div>
        <h1>Social Window</h1>
      </div>
    </Layout>
  );
};

export default DAW;
