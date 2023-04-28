import { arrLength } from "./array-length";

type PushFn = (arr: any[], item: any) => void;

export const push: PushFn = (arr: any[], item: any) => {
    arr[arrLength(arr)] = item;
};