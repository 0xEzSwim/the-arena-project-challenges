import { BNode, RotateFn, rotateLeft, rotateRight } from ".";

export const rotateRightLeft: RotateFn = (root: BNode): BNode => {
    let currentNode: BNode = root;
    let rightNode: BNode | null = currentNode.right;
    if(!rightNode) {
        return currentNode;
    }

    rightNode = rotateRight(rightNode);
    currentNode.right = rightNode;

    return rotateLeft(currentNode);
};