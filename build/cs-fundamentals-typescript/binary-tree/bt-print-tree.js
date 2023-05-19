"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.printTree = void 0;
const printTreeRecursive = (node, depth = 0) => {
    if (!node) {
        return;
    }
    process.stdout.write(`${node.value}\n`);
    const nextNodeDepth = depth + 1;
    const nextNodePaddingSize = nextNodeDepth * 4;
    const nextNodePadding = `|___`.padStart(nextNodePaddingSize, `|`.padEnd(4));
    if (node.right) {
        process.stdout.write(nextNodePadding);
        printTreeRecursive(node.right, nextNodeDepth);
    }
    if (node.left) {
        process.stdout.write(nextNodePadding);
        printTreeRecursive(node.left, nextNodeDepth);
    }
};
const printTree = (node) => {
    printTreeRecursive(node, 0);
};
exports.printTree = printTree;
