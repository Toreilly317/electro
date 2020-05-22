import * as React from "react";
import { ipcRenderer } from "electron";

interface IFileTreeContext {
  folders: any[];
  setUserFolder: () => void;
}

export const FileTreeContext = React.createContext<Partial<IFileTreeContext>>({
  folders: [],
});

export const FileTreeProvider: React.FC = ({ children }) => {
  const setUserFolder = () => {
    ipcRenderer.send("SET_SAMPLE_FOLDER:REQUEST");
  };

  ipcRenderer.on("USER_FOLDER_SET:RESPONSE", (event, args) => {
    console.log(args);
  });

  return (
    <FileTreeContext.Provider value={{ folders: [], setUserFolder }}>
      {children}
    </FileTreeContext.Provider>
  );
};
