import * as React from "react";
import styled from "styled-components";

const FileBrowserStyles = styled.div`
  max-height: 100vh;
  overflow-y: scroll;
  max-height: 100vh;
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  li {
    list-style: none;
    padding: 3px;
  }

  .folder-name,
  .main-folder {
    font-weight: 600;
    text-transform: capitalize;
    font-size: 1.4rem;
  }

  .folder-item {
    font-weight: 400;
    margin-left: 20px;
    font-size: 1rem;
    font-weight: 400px;

    display: block;
  }
`;

export interface Folder {
  name: string;
  contents: Array<string[] | Folder>;
}

type FolderConfig = Folder[];

const FileBrowser: React.FC<{ folders: FolderConfig }> = ({ folders }) => {
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

const Folder: React.FC<{ folder: Folder; parentFolderHidden?: boolean }> = ({
  folder,
  parentFolderHidden,
}) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const isFolder = (item: any) =>
    item.name && item.contents.length ? true : false;
  return (
    <>
      <li onClick={() => setIsOpen(!isOpen)} className="folder-name">
        {folder.name}
      </li>
      {folder.contents.map((folderItem) =>
        isFolder(folderItem) ? (
          <li
            style={{
              display: `${isOpen ? "block" : "none"}`,
            }}
          >
            <ul>
              <Folder
                folder={folderItem as Folder}
                parentFolderHidden={isOpen}
              />
            </ul>
          </li>
        ) : (
          <li
            style={{
              display: `${isOpen ? "block" : "none"}`,
            }}
            className="folder-item"
          >
            {(folderItem as string[])[0]}
          </li>
        )
      )}
    </>
  );
};

export default FileBrowser;
