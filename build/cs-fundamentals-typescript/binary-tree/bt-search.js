"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.search = void 0;
const searchNode = (node, value) => {
    if (value < node.value) {
        if (!node.left) {
            return;
        }
        return searchNode(node.left, value);
    }
    else if (value > node.value) {
        if (!node.right) {
            return;
        }
        return searchNode(node.right, value);
    }
    return node;
};
const search = (root, value) => {
    if (!root) {
        return;
    }
    return searchNode(root, value);
};
exports.search = search;
