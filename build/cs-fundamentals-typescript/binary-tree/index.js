"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.printInfix = exports.createNode = void 0;
const createNode = (value) => {
    return {
        left: null,
        right: null,
        value: value
    };
};
exports.createNode = createNode;
const printInfix = (node) => {
    if (!node) {
        return;
    }
    (0, exports.printInfix)(node.left);
    process.stdout.write(`${node.value} > `);
    (0, exports.printInfix)(node.right);
};
exports.printInfix = printInfix;
__exportStar(require("./bt-insert"), exports);
__exportStar(require("./bt-search"), exports);
__exportStar(require("./bt-get-height"), exports);
__exportStar(require("./bt-get-balance-factor"), exports);
__exportStar(require("./bt-rotate-right"), exports);
__exportStar(require("./bt-rotate-left"), exports);
__exportStar(require("./bt-rotate-right-left"), exports);
__exportStar(require("./bt-rotate-left-right"), exports);
__exportStar(require("./bt-insert-balanced"), exports);
__exportStar(require("./bt-print-tree"), exports);
