import { BNode, getHeight } from ".";

type GetBalanceFn = (root: BNode | null) => number;

export const getBalanceFactor: GetBalanceFn = (root: BNode | null): number => {
    const leftHieght: number = getHeight(root?.left ?? null);
    const rightHieght: number = getHeight(root?.right ?? null);

    return leftHieght - rightHieght;
};