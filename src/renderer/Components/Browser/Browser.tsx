import * as React from "react";
import styled from "styled-components";
import FileBrowser from "../FileBrowser/FileBrowser";
import { sampleData } from "../../../templates/fileTree";
import { DirTree } from "../../../FileTree";
import { FileTreeContext } from "../Providers/FileTreeProvider";
import { Icon } from "../Common";
import { BrowserBar } from "./BrowserBar";

const Browserstyles = styled.div`
  display: flex;

  padding: 0.5rem;
  min-height: 100vh;
  .title {
    margin-bottom: 1rem;
    border-bottom: 2px solid black;
    font-size: 1rem;
    font-weight: bold;
    letter-spacing: 2px;
  }

  .browser-section {
    min-height: 100px;
  }

  .browser-section-item {
    margin-left: 10px;
  }

  .file-window: {
    padding: 1rem;
  }
`;

const BrowserSection = styled.div`
  min-height: 100px;
`;

const Browser: React.FC = () => {
  const { setUserFolder } = React.useContext(FileTreeContext);
  return (
    <Browserstyles>
      <BrowserBar />
      <div id="file-window">
        <div className="browser-section">
          <div className="title">Electro</div>
          <div className="browser-section-item">Instruments</div>
          <div className="browser-section-item">Effects</div>
        </div>
        <div className="browser-section">
          <div className="title">User</div>
          <div className="browser-section-item">
            <FileBrowser folders={[sampleData as DirTree]} />
          </div>
        </div>
      </div>
    </Browserstyles>
  );
};

export default Browser;
