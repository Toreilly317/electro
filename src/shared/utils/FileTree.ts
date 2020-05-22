import { remote } from "electron"
import electronFs from "fs"


export class FileTree {
    path: string
    name: string | null
    items: any[]
    constructor(path: string, name: string | null = null, ) {
        this.path = path;
        this.name = name;
        this.items = [];
    }

    build = () => {
        this.items = FileTree.readDir(this.path);
    }

    static readDir(path: string) {
        var fileArray: any[] = [];

        electronFs.readdirSync(path).forEach(file => {
            var fileInfo = new FileTree(`${path}\\${file}`, file);

            var stat = electronFs.statSync(fileInfo.path);

            if (stat.isDirectory()) {
                fileInfo.items = FileTree.readDir(fileInfo.path);
            }

            fileArray.push(fileInfo);
        })

        return fileArray;
    }
}