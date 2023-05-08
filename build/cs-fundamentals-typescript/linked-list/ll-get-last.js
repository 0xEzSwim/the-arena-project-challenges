"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.llGetLast = void 0;
const llGetLast = (list) => {
    if (list === null || list === void 0 ? void 0 : list.next) {
        return (0, exports.llGetLast)(list.next);
    }
    return list;
};
exports.llGetLast = llGetLast;
