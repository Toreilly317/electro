const directory = "/home/to/Desktop/Samples";
import fs from "fs"
import path from "path"
/* 
This will recusively build a file tree that we can use for user folders.
maybe this is a good place to explore service workers a little more.
there may also be an advantage to doing this with streams. with streams we could display each file as its loaded
which may be better ux than just a spinner/loader.
*/

interface DirTree {
    name: string
    path: string
    type: "folder" | "file"
    children?: DirTree[]
}

const writeJson = (data: any) => {
    fs.writeFile("info.json", JSON.stringify(data, null, 4), (err) => {
        console.log(err);
    });
};

const isFileOrDir = (filePath: string) => {
    const stats = fs.lstatSync(filePath);
    return {
        isDir: stats.isDirectory(),
        isFile: stats.isFile(),
    };
};

const isAudioFile = (filePath: string) =>
    [".mp3", ".wav"].includes(path.extname(filePath));

const directoryCanBeUsed = (filePath: string) => {
    //check if folder contains audio files or other folders
    return fs.readdirSync(filePath).some((child) => {
        const currentPath = path.join(filePath, child);

        return fs.lstatSync(currentPath).isDirectory() || isAudioFile(currentPath);
    });
};

export const fileTreeFromPath = (filePath: string): DirTree => {
    const { isDir, isFile } = isFileOrDir(filePath);

    let info: Partial<DirTree> = {
        name: path.basename(filePath),
        path: filePath,
    };

    if (isDir) {
        //get list of accepted children
        const filteredItems = fs.readdirSync(filePath).filter((child) => {
            const currentPath = path.join(filePath, child);

            //return true if child is a audio file
            if (isFileOrDir(currentPath).isFile && isAudioFile(currentPath)) {
                return true;
            }

            if (isFileOrDir(currentPath).isDir && directoryCanBeUsed(currentPath)) {
                return true;
            }

            return false;
        });
        info.type = "folder";
        info.children = filteredItems.map((child) => {
            return fileTreeFromPath(path.join(filePath, child));
        });
    } else if (isFileOrDir(filePath).isFile) {
        info.type = "file";
    }
    return info as DirTree;
};


