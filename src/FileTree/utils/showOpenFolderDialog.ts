import { dialog } from "electron"

export const showOpenFolderDialog = () => {

    const options: Electron.OpenDialogOptions = {
        // See place holder 1 in above image
        title: "Select a folder containing audio samples",

        // See place holder 2 in above image
        defaultPath: "D:\\electron-app",

        // See place holder 3 in above image
        buttonLabel: "Open",
        properties: ["openDirectory"],

    }

    //Synchronous
    return dialog.showOpenDialog(options)

}

