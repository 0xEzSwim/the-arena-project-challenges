"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.llReverse = void 0;
const llReverse = (list) => {
    let current = list;
    let previous = null;
    while (current) {
        const next = current.next;
        current.next = previous;
        previous = current;
        current = next;
    }
    return previous;
};
exports.llReverse = llReverse;
