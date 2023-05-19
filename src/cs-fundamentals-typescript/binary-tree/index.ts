export type BNode = {
	left: BNode | null,
	right: BNode | null,
	value: number
};

export type RotateFn = (root: BNode) => BNode;

export const createNode = (value: number): BNode => {
    return {
        left: null,
        right: null,
        value: value
    };
};

export const printInfix = (node: BNode | null): void => {
    if(!node) {
        return;
    }
    printInfix(node.left);
    process.stdout.write(`${node.value} > `);
    printInfix(node.right);
};

export * from './bt-insert';
export * from './bt-search';
export * from './bt-get-height';
export * from './bt-get-balance-factor';
export * from './bt-rotate-right';
export * from './bt-rotate-left';
export * from './bt-rotate-right-left';
export * from './bt-rotate-left-right';
export * from './bt-insert-balanced';
export * from './bt-print-tree';