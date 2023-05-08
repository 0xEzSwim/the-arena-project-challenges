"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.llForEach = void 0;
const llForEach = (list, cb) => {
    let current = list;
    let i = 0;
    while (current) {
        cb(current, i);
        current = current.next;
        i++;
    }
};
exports.llForEach = llForEach;
