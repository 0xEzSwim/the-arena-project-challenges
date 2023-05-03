import { openSync, readSync, statSync, writeSync } from 'fs';
import { basename, join } from 'path';

const BUFFER_SIZE = 4096;

const sourcePath = process.argv[2];
const targetPath = process.argv[3];

try {
    const sourceStat = statSync(sourcePath);

    if (sourceStat.isDirectory()) {
        process.exit(1);
    }
} catch (error) {
    process.exit(1);
}

let targetIsDirectory = false;
try {
    const targetStat = statSync(targetPath);
    targetIsDirectory = targetStat.isDirectory();
} catch (error) {
}

const targetFilePath = targetIsDirectory ? join(targetPath, basename(sourcePath)) : targetPath;
const tmpBuf = new Uint8Array(BUFFER_SIZE);
let bytesRead = 0;

const sourceFd = openSync(sourcePath, 'r');
const targetFd = openSync(targetFilePath, 'w');

while ((bytesRead = readSync(sourceFd, tmpBuf, { length: BUFFER_SIZE })) > 0) {
    writeSync(targetFd, Buffer.from(tmpBuf), 0, bytesRead);
}