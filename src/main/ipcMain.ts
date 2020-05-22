//main.js - the main process
import { dialog, ipcMain } from "electron"
import path from "path"

import fs from "fs"
import { ADD_USER_FOLDER } from "../shared/constants"

export const loadDirectory = () => {


    const options: Electron.OpenDialogOptions = {
        // See place holder 1 in above image
        title: "Select a folder containing audio samples",

        // See place holder 2 in above image
        defaultPath: "D:\\electron-app",

        // See place holder 3 in above image
        buttonLabel: "Select Sample Folder",
        properties: ["openDirectory"],

    }

    //Synchronous
    return dialog.showOpenDialog(options)

}


// lets user select a directory then sends back a formatted object which we can use for our filebrowser component
ipcMain.on(ADD_USER_FOLDER, async (event) => {
    console.log("HELLO WORLD")
    const { filePaths } = await loadDirectory() //choose the directory
    console.log(path.join(filePaths[0]))
    // // read the contents of the directory
    // fs.readdir(filePaths[0], (err, files) => {
    //     console.log(files)
    // })

})
