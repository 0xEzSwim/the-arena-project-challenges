"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.llShift = void 0;
const llShift = (list) => {
    var _a;
    if (!list) {
        return undefined;
    }
    const nextLink = (_a = list.next) !== null && _a !== void 0 ? _a : undefined;
    list.next = null;
    return nextLink;
};
exports.llShift = llShift;
