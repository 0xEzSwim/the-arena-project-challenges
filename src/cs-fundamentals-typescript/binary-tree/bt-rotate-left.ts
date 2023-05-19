import { BNode, RotateFn } from ".";

export const rotateLeft: RotateFn = (root: BNode): BNode => {
    let currentNode: BNode = root;
    let rightNode: BNode | null = currentNode.right;
    
    if(!rightNode) {
        return currentNode;
    }
    currentNode.right = rightNode.left;
    rightNode.left = currentNode;

    return rightNode;
};