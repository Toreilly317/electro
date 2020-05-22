import * as React from "react";
import { ipcRenderer } from "electron";

const handlers = () => ({
  setUserFolder: () => ipcRenderer.send("SET_USER_FOLDER"),
});

interface IFileTreeContext {
  folders: any[];
  setUserFolder: () => void;
}

export const FileTreeContext = React.createContext<Partial<IFileTreeContext>>({
  folders: [],
});

export const FileTreeProvider: React.FC = ({ children }) => {
  const setUserFolder = () => {
    ipcRenderer.send("SET_USER_FOLDER");
  };

  ipcRenderer.on("USER_FOLDER_SET", (event, args) => {
    console.log(args);
  });

  return (
    <FileTreeContext.Provider value={{ folders: [], setUserFolder }}>
      {children}
    </FileTreeContext.Provider>
  );
};
