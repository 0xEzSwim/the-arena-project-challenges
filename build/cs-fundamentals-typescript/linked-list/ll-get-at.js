"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.llGetAt = void 0;
const llGetAt = (list, index) => {
    if (!list) {
        return undefined;
    }
    else if (index == 0) {
        return list;
    }
    return (0, exports.llGetAt)(list.next, index - 1);
};
exports.llGetAt = llGetAt;
