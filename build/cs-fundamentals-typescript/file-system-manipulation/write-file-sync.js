"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.writeFileSync = void 0;
const fs_1 = require("fs");
const writeFileSync = (path, buffer) => {
    const fd = (0, fs_1.openSync)(path, 'w');
    const n = (0, fs_1.writeSync)(fd, buffer, 0, buffer.length);
    (0, fs_1.closeSync)(fd);
    return n;
};
exports.writeFileSync = writeFileSync;
