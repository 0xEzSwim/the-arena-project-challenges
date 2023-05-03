"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.readFileSync = void 0;
const fs_1 = require("fs");
const BUFFER_SIZE = 1024;
const readFileSync = (path) => {
    let buffer = Buffer.from('');
    const fd = (0, fs_1.openSync)(path, 'r');
    const tmpBuf = new Uint8Array(BUFFER_SIZE);
    let n = 0;
    while ((n = (0, fs_1.readSync)(fd, tmpBuf, { length: 1024 })) > 0) {
        buffer = Buffer.concat([buffer, tmpBuf.slice(0, n)]);
    }
    (0, fs_1.closeSync)(fd);
    return buffer.toString('utf-8');
};
exports.readFileSync = readFileSync;
