"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.llCount = void 0;
const llCount = (list) => {
    if (!list) {
        return 0;
    }
    return 1 + (0, exports.llCount)(list.next);
};
exports.llCount = llCount;
