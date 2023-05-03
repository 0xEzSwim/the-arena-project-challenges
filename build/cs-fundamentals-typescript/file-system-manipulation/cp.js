"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const path_1 = require("path");
const BUFFER_SIZE = 4096;
const sourcePath = process.argv[2];
const targetPath = process.argv[3];
try {
    const sourceStat = (0, fs_1.statSync)(sourcePath);
    if (sourceStat.isDirectory()) {
        process.exit(1);
    }
}
catch (error) {
    process.exit(1);
}
let targetIsDirectory = false;
try {
    const targetStat = (0, fs_1.statSync)(targetPath);
    targetIsDirectory = targetStat.isDirectory();
}
catch (error) {
}
const targetFilePath = targetIsDirectory ? (0, path_1.join)(targetPath, (0, path_1.basename)(sourcePath)) : targetPath;
const tmpBuf = new Uint8Array(BUFFER_SIZE);
let bytesRead = 0;
const sourceFd = (0, fs_1.openSync)(sourcePath, 'r');
const targetFd = (0, fs_1.openSync)(targetFilePath, 'w');
while ((bytesRead = (0, fs_1.readSync)(sourceFd, tmpBuf, { length: BUFFER_SIZE })) > 0) {
    (0, fs_1.writeSync)(targetFd, Buffer.from(tmpBuf), 0, bytesRead);
}
