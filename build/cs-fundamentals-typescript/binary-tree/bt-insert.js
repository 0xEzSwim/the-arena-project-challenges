"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.insert = void 0;
const _1 = require(".");
const insertNode = (node, newNode) => {
    if (newNode.value < node.value) {
        if (!node.left) {
            node.left = newNode;
        }
        else {
            insertNode(node.left, newNode);
        }
    }
    else if (newNode.value > node.value) {
        if (!node.right) {
            node.right = newNode;
        }
        else {
            insertNode(node.right, newNode);
        }
    }
};
const insert = (root, value) => {
    const newNode = (0, _1.createNode)(value);
    if (!root) {
        return newNode;
    }
    insertNode(root, newNode);
    return root;
};
exports.insert = insert;
