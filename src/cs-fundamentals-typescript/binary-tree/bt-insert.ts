import { BNode, createNode } from ".";

type InsertFn = (root: BNode | null, value: number) => BNode;

const insertNode = (node: BNode, newNode: BNode): void => {
    if(newNode.value < node.value) {
        if(!node.left) {
            node.left = newNode;
        } else {
            insertNode(node.left, newNode);
        }
    } else if (newNode.value > node.value){
        if(!node.right) {
            node.right = newNode;
        }
        else {
            insertNode(node.right, newNode);
        }
    }
};

export const insert: InsertFn = (root: BNode | null, value: number): BNode => {
    const newNode = createNode(value);

    if(!root) {
        return newNode;
    }
    
    insertNode(root, newNode);
    return root;
};
