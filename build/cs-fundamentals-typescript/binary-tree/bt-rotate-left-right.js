"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rotateLeftRight = void 0;
const _1 = require(".");
const rotateLeftRight = (root) => {
    let currentNode = root;
    let leftNode = currentNode.left;
    if (!leftNode) {
        return currentNode;
    }
    leftNode = (0, _1.rotateLeft)(leftNode);
    currentNode.left = leftNode;
    return (0, _1.rotateRight)(currentNode);
};
exports.rotateLeftRight = rotateLeftRight;
