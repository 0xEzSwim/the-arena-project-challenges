"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.insertBalanced = void 0;
const _1 = require(".");
const insertBalancedNode = (node, value) => {
    if (!node) {
        return (0, _1.createNode)(value);
    }
    if (value < node.value) {
        node.left = insertBalancedNode(node.left, value);
    }
    else if (value > node.value) {
        node.right = insertBalancedNode(node.right, value);
    }
    if ((0, _1.getBalanceFactor)(node) === 2) {
        return (0, _1.getBalanceFactor)(node.left) > 0 ? (0, _1.rotateRight)(node) : (0, _1.rotateLeftRight)(node);
    }
    else if ((0, _1.getBalanceFactor)(node) === -2) {
        return (0, _1.getBalanceFactor)(node.right) > 0 ? (0, _1.rotateRightLeft)(node) : (0, _1.rotateLeft)(node);
    }
    return node;
};
const insertBalanced = (root, value) => {
    return insertBalancedNode(root, value);
};
exports.insertBalanced = insertBalanced;
