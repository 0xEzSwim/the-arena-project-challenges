"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rotateRightLeft = void 0;
const _1 = require(".");
const rotateRightLeft = (root) => {
    let currentNode = root;
    let rightNode = currentNode.right;
    if (!rightNode) {
        return currentNode;
    }
    rightNode = (0, _1.rotateRight)(rightNode);
    currentNode.right = rightNode;
    return (0, _1.rotateLeft)(currentNode);
};
exports.rotateRightLeft = rotateRightLeft;
