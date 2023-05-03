"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isAlpha = void 0;
const isAlpha = (str) => {
    return /^[A-Z]*$/i.test(str);
};
exports.isAlpha = isAlpha;
