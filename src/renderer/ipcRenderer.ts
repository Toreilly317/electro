import { ipcRenderer } from "electron"
import { ADD_USER_FOLDER } from "../shared/constants"

export const addUserFolder = () => ipcRenderer.send(ADD_USER_FOLDER) 