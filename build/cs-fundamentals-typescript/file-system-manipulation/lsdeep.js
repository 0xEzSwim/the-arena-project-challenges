"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const path_1 = require("path");
const path = process.argv[2];
if (typeof path !== 'string') {
    console.warn('Missing path to directory.');
    process.exit(1);
}
const listDirectory = (path, isFirst = false) => {
    let folders = [];
    let subFolders = [];
    let total = 0;
    const folderChildren = (0, fs_1.readdirSync)(path).sort((a, b) => a.localeCompare(b));
    let i = 0;
    while (i < folderChildren.length) {
        const child = folderChildren[i];
        const childPath = (0, path_1.join)(path, child);
        const childStats = (0, fs_1.statSync)(childPath);
        total += childStats.blocks;
        const fileTypeToDisplay = childStats.isDirectory() ? "Directory" : "File";
        if (childStats.isDirectory()) {
            subFolders.push(childPath);
        }
        folders.push(`${fileTypeToDisplay.padEnd(11)}${child}`);
        i++;
    }
    process.stdout.write(`${!isFirst ? '\n' : ''}${path}:\ntotal ${total}\n${folders.join('\n')}${folders.length ? '\n' : ''}`);
    i = 0;
    while (i < subFolders.length) {
        listDirectory(subFolders[i++]);
    }
};
try {
    listDirectory(path, true);
    process.exit(0);
}
catch (err) {
    console.error(`Error: ${path} is not a valid directory`);
    process.exit(1);
}
;
