import * as React from "react";
import { Folder } from "./FileBrowser";
import styled from "styled-components";
import { useToggle } from "../../hooks/useToggle";

const FileBrowserFolder: React.FC<{ folder: Folder }> = ({ folder }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const isFolder = (item: any) =>
    item.name && item.contents.length ? true : false;

  const handleOnClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <li
        onClick={handleOnClick}
        style={{ cursor: "pointer" }}
        className="folder-name"
      >
        {folder.name}
      </li>
      {folder.contents.map((folderItem: Folder | string[]) => {
        if (isFolder(folderItem)) {
          return (
            <li style={{ display: `${isOpen} ? "block" : "none"` }}>
              <ul>
                <FileBrowserFolder folder={folderItem as Folder} />
              </ul>
            </li>
          );
        } else {
          return (
            <li style={{ display: `${isOpen} ? "block" : "none"` }}>
              {(folderItem as string[])[0]}
            </li>
          );
        }
      })}
    </>
  );
};

export default FileBrowserFolder;
