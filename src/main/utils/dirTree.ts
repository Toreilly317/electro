import fs from "fs"
import path from "path"

const directory = "/home/to/Desktop/Samples";

/* 
This will recusively build a file tree that we can use for user folders.
maybe this is a good place to explore service workers a little more.
there may also be an advantage to doing this with streams. with streams we could display each file as its loaded
which may be better ux than just a spinner/loader.
*/

export interface DirTree {
    path: string
    name: string
    type?: "folder" | "file"
    children?: DirTree[]
}

export const dirTree = (filename: string): DirTree => {
    var stats = fs.lstatSync(filename),
        info: DirTree = {
            path: filename,
            name: path.basename(filename),
        };

    if (stats.isDirectory()) {
        info.type = "folder";
        info.children = fs.readdirSync(filename).map(function (child) {
            return dirTree(filename + "/" + child);
        });
    } else {
        // Assuming it's a file. In real life it could be a symlink or
        // something else!
        info.type = "file";
    }

    return info;
}

const writeJson = (data: any) => {
    fs.writeFile("info.json", JSON.stringify(data, null, 4), (err) => {
        console.log(err);
    });
}



export const saveFileTreeToJson = () => writeJson(dirTree(directory))


