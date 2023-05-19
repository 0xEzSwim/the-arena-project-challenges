import { BNode, RotateFn, rotateLeft, rotateRight } from ".";

export const rotateLeftRight: RotateFn = (root: BNode): BNode => {
    let currentNode: BNode = root;
    let leftNode: BNode | null = currentNode.left;
    if(!leftNode) {
        return currentNode;
    }

    leftNode = rotateLeft(leftNode);
    currentNode.left = leftNode;

    return rotateRight(currentNode);
};