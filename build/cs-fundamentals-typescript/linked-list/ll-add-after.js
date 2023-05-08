"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.llAddAfter = void 0;
const llAddAfter = (link, data) => {
    const newLink = {
        data: data,
        next: link ? link.next : null
    };
    if (link) {
        link.next = newLink;
    }
    return newLink;
};
exports.llAddAfter = llAddAfter;
