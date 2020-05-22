import * as React from "react";
import styled from "styled-components";
import { DirTree } from "../../../FileTree";
import { FolderArrow } from "../Common";

const FileBrowserStyles = styled.div`
  overflow-y: scroll;
  font-weight: 400;

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  li {
    list-style: none;
    padding: 3px;
  }

  font-size: 1rem;

  .folder-name,
  .main-folder {
    text-transform: capitalize;
  }

  .folder-item {
    margin-left: 20px;
    font-size: 0.8rem;
    display: block;
  }
`;

const FileBrowser: React.FC<{ folders: DirTree[] }> = ({ folders }) => {
  return (
    <FileBrowserStyles>
      <ul>
        {folders.map((folder) => {
          return <Folder folder={folder} key={folder.name} />;
        })}
      </ul>
    </FileBrowserStyles>
  );
};

const Folder: React.FC<{ folder: DirTree; parentFolderHidden?: boolean }> = ({
  folder,
  parentFolderHidden,
}) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
      <li onClick={() => setIsOpen(!isOpen)} className="folder-name">
        <FolderArrow isUp={isOpen} />
        {folder.name}
      </li>
      {folder &&
        folder.children &&
        folder.children.map((folderItem, index) =>
          folderItem.type === "folder" ? (
            <li
              style={{
                display: `${isOpen ? "block" : "none"}`,
              }}
              key={index}
            >
              <ul>
                <Folder folder={folderItem} parentFolderHidden={isOpen} />
              </ul>
            </li>
          ) : (
            <li
              style={{
                display: `${isOpen ? "block" : "none"}`,
              }}
              className="folder-item"
              key={index}
            >
              {folderItem.name}
            </li>
          )
        )}
    </>
  );
};

export default FileBrowser;
