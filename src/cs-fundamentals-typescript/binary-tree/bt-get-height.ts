import { BNode } from ".";

type GetHeightFn = (root: BNode | null) => number;

export const getHeight : GetHeightFn = (root: BNode | null): number => {
    let maxDepth: number = -1;

    const getMaxDepth = (node: BNode | null, depth: number): void => {
        if(!node) {
            return;
        }

        if(node.left) {
            getMaxDepth(node.left, depth + 1);
        }

        if(node.right) {
            getMaxDepth(node.right, depth + 1);
        }

        maxDepth = Math.max(maxDepth, depth);
    };

    getMaxDepth(root, 0);

    return maxDepth
};