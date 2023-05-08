"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.llMerge = void 0;
const _1 = require(".");
const llMerge = (listA, listB) => {
    if (!listA) {
        return listB;
    }
    const lastLink = (0, _1.llGetLast)(listA);
    lastLink.next = listB;
    return listA;
};
exports.llMerge = llMerge;
