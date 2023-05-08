"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.llPush = void 0;
const llPush = (list, data) => {
    if (list === null || list === void 0 ? void 0 : list.next) {
        return (0, exports.llPush)(list.next, data);
    }
    const newLink = {
        data: data,
        next: null
    };
    if (list) {
        list.next = newLink;
    }
    return newLink;
};
exports.llPush = llPush;
