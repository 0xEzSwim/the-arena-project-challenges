import { BNode, RotateFn } from ".";

export const rotateRight: RotateFn = (root: BNode): BNode => {
    let currentNode: BNode = root;
    let leftNode: BNode | null = currentNode.left;
    
    if(!leftNode) {
        return currentNode;
    }
    currentNode.left = leftNode.right;
    leftNode.right = currentNode;

    return leftNode;
};