import { BNode } from ".";

type PrintTreeFn = (root: BNode | null) => void;

const printTreeRecursive = (node: BNode | null, depth: number = 0): void => {
    if(!node){
        return;
    }

    process.stdout.write(`${node.value}\n`);

    const nextNodeDepth = depth + 1;
    const nextNodePaddingSize: number = nextNodeDepth * 4;
    const nextNodePadding: string = `|___`.padStart(nextNodePaddingSize, `|`.padEnd(4));

    if (node.right) {
        process.stdout.write(nextNodePadding);
        printTreeRecursive(node.right, nextNodeDepth);
    } 

    if(node.left) {
        process.stdout.write(nextNodePadding);
        printTreeRecursive(node.left, nextNodeDepth);
    }
};

export const printTree: PrintTreeFn = (node: BNode | null): void => {
    printTreeRecursive(node, 0);
};
