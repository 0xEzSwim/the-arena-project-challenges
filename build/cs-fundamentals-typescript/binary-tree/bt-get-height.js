"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getHeight = void 0;
const getHeight = (root) => {
    let maxDepth = -1;
    const getMaxDepth = (node, depth) => {
        if (!node) {
            return;
        }
        if (node.left) {
            getMaxDepth(node.left, depth + 1);
        }
        if (node.right) {
            getMaxDepth(node.right, depth + 1);
        }
        maxDepth = Math.max(maxDepth, depth);
    };
    getMaxDepth(root, 0);
    return maxDepth;
};
exports.getHeight = getHeight;
