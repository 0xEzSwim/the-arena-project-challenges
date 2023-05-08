"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.insertAt = void 0;
const _1 = require(".");
const insertAt = (list, index, data) => {
    const [previous, current] = [
        (0, _1.llGetAt)(list, index - 1),
        (0, _1.llGetAt)(list, index)
    ];
    if (!current && index !== 0) {
        return undefined;
    }
    const newLink = {
        data: data,
        next: current !== null && current !== void 0 ? current : null,
    };
    if (previous) {
        previous.next = newLink;
    }
    return newLink;
};
exports.insertAt = insertAt;
