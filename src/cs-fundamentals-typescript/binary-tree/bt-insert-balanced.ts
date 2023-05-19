import { BNode, createNode, getBalanceFactor, rotateLeft, rotateLeftRight, rotateRight, rotateRightLeft } from ".";

const insertBalancedNode = (node: BNode | null, value: number): BNode => {
    if(!node) {
        return createNode(value);
    }

    if(value < node.value) {
        node.left = insertBalancedNode(node.left, value);
    } else if (value > node.value){
        node.right = insertBalancedNode(node.right, value);
    }

    if(getBalanceFactor(node) === 2) {
        return getBalanceFactor(node.left) > 0 ? rotateRight(node) : rotateLeftRight(node);
    } else if(getBalanceFactor(node) === -2) {
        return getBalanceFactor(node.right) > 0 ? rotateRightLeft(node) : rotateLeft(node);
    }

    return node;
};

type InsertBalancedFn = (root: BNode | null, value: number) => BNode;

export const insertBalanced: InsertBalancedFn = (root: BNode | null, value): BNode => {
    return insertBalancedNode(root, value);
};