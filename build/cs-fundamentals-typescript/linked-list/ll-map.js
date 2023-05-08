"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.llMap = void 0;
const llMap = (list, cb) => {
    let current = list;
    let i = 0;
    let newList = [];
    while (current) {
        newList.push(cb(current, i));
        current = current.next;
        i++;
    }
    return newList;
};
exports.llMap = llMap;
