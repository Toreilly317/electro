import { dirTree, showOpenFolderDialog } from "./index"
import { ipcMain } from "electron"
import fs from "fs"

export const handleAddUserFolder = () => {
    ipcMain.on("SET_SAMPLE_FOLDER:REQUEST", async (event) => {
        //get folder path from dialog
        const { filePaths } = await showOpenFolderDialog()
        //set folder path to variable
        const selectedFolder = filePaths[0]
        //return if no folder
        if (!selectedFolder) return false

        const info = dirTree(selectedFolder);

        fs.writeFile("./DATA.json", JSON.stringify(info, null, 4), (err) => err && console.log(err))
    })
}