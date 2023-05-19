"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rotateRight = void 0;
const rotateRight = (root) => {
    let currentNode = root;
    let leftNode = currentNode.left;
    if (!leftNode) {
        return currentNode;
    }
    currentNode.left = leftNode.right;
    leftNode.right = currentNode;
    return leftNode;
};
exports.rotateRight = rotateRight;
