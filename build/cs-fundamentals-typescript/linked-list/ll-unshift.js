"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.llUnshift = void 0;
const llUnshift = (head, data) => {
    const newLink = {
        data: data,
        next: head
    };
    return newLink;
};
exports.llUnshift = llUnshift;
