"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBalanceFactor = void 0;
const _1 = require(".");
const getBalanceFactor = (root) => {
    var _a, _b;
    const leftHieght = (0, _1.getHeight)((_a = root === null || root === void 0 ? void 0 : root.left) !== null && _a !== void 0 ? _a : null);
    const rightHieght = (0, _1.getHeight)((_b = root === null || root === void 0 ? void 0 : root.right) !== null && _b !== void 0 ? _b : null);
    return leftHieght - rightHieght;
};
exports.getBalanceFactor = getBalanceFactor;
