"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.llFind = void 0;
const llFind = (list, cb) => {
    let current = list;
    while (current) {
        if (cb(current)) {
            return current;
        }
        current = current.next;
    }
    return undefined;
};
exports.llFind = llFind;
