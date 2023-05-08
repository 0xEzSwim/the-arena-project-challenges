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
exports.llPrint = void 0;
const llPrint = (node, message = '') => {
    if (message) {
        process.stdout.write(`${message}\n`);
    }
    process.stdout.write(`${node ? node.data : null}`);
    if (node === null || node === void 0 ? void 0 : node.next) {
        process.stdout.write(" -> ");
        (0, exports.llPrint)(node.next);
    }
    else {
        process.stdout.write(`\n`);
    }
};
exports.llPrint = llPrint;
__exportStar(require("./ll-create-link"), exports);
__exportStar(require("./ll-unshift"), exports);
__exportStar(require("./ll-add-after"), exports);
__exportStar(require("./ll-count"), exports);
__exportStar(require("./ll-get-last"), exports);
__exportStar(require("./ll-push"), exports);
__exportStar(require("./ll-get-at"), exports);
__exportStar(require("./ll-delete-at"), exports);
__exportStar(require("./ll-shift"), exports);
__exportStar(require("./ll-insert-at"), exports);
__exportStar(require("./ll-pop"), exports);
__exportStar(require("./ll-for-each"), exports);
__exportStar(require("./ll-map"), exports);
__exportStar(require("./ll-find"), exports);
__exportStar(require("./ll-merge"), exports);
__exportStar(require("./ll-reverse"), exports);
__exportStar(require("./ll-ultimerge"), exports);
