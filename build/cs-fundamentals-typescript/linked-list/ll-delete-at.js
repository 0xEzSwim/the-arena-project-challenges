"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.llDeleteAt = void 0;
const _1 = require(".");
const llDeleteAt = (list, index) => {
    const [previous, current, next] = [
        (0, _1.llGetAt)(list, index - 1),
        (0, _1.llGetAt)(list, index),
        (0, _1.llGetAt)(list, index + 1),
    ];
    if (!current) {
        return undefined;
    }
    if (previous) {
        previous.next = next !== null && next !== void 0 ? next : null;
    }
    return current;
};
exports.llDeleteAt = llDeleteAt;
