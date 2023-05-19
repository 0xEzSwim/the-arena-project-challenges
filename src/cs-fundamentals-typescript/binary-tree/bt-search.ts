import { BNode } from ".";

type SearchFn = (root: BNode | null, value: number) => BNode | undefined;

const searchNode = (node: BNode,  value: number): BNode | undefined => {
    if(value < node.value) {
        if(!node.left) {
            return;
        }
        return searchNode(node.left, value);
    } else if (value > node.value) {
        if(!node.right) {
            return;
        }
        return searchNode(node.right, value);
    }

    return node;
};

export const search: SearchFn = (root: BNode | null, value: number): BNode | undefined => {
    if(!root) {
        return;
    }

    return searchNode(root, value);
};