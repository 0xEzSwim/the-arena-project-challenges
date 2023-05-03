"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const path = process.argv[2];
if (typeof path !== 'string') {
    console.warn('Missing path to directory.');
    process.exit(1);
}
const listDirectory = (path) => {
    let folders = [];
    let total = 0;
    const folderChildren = (0, fs_1.readdirSync)(path).sort((a, b) => a.localeCompare(b));
    let i = 0;
    while (i < folderChildren.length) {
        const child = folderChildren[i];
        const childStats = (0, fs_1.statSync)(`${path}/${child}`);
        total += childStats.blocks;
        const fileTypeToDisplay = childStats.isDirectory() ? "Directory" : "File";
        folders.push(`${fileTypeToDisplay.padEnd(11)}${child}`);
        i++;
    }
    return `total ${total}\n${folders.join('\n')}`;
};
try {
    console.log(listDirectory(path));
    process.exit(0);
}
catch (err) {
    console.error(`Error: ${path} is not a valid directory`);
    process.exit(1);
}
;
