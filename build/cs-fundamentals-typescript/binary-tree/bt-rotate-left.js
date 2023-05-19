"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rotateLeft = void 0;
const rotateLeft = (root) => {
    let currentNode = root;
    let rightNode = currentNode.right;
    if (!rightNode) {
        return currentNode;
    }
    currentNode.right = rightNode.left;
    rightNode.left = currentNode;
    return rightNode;
};
exports.rotateLeft = rotateLeft;
