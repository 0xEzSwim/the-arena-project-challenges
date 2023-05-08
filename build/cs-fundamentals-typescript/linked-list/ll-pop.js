"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.llPop = exports.llGetBeforeLast = void 0;
const llGetBeforeLast = (list) => {
    var _a;
    if ((_a = list === null || list === void 0 ? void 0 : list.next) === null || _a === void 0 ? void 0 : _a.next) {
        return (0, exports.llGetBeforeLast)(list.next);
    }
    return list;
};
exports.llGetBeforeLast = llGetBeforeLast;
const llPop = (list) => {
    var _a;
    const beforeLastLink = (0, exports.llGetBeforeLast)(list);
    const lastLink = beforeLastLink === null || beforeLastLink === void 0 ? void 0 : beforeLastLink.next;
    if (beforeLastLink) {
        beforeLastLink.next = null;
    }
    return (_a = lastLink !== null && lastLink !== void 0 ? lastLink : beforeLastLink) !== null && _a !== void 0 ? _a : undefined;
};
exports.llPop = llPop;
