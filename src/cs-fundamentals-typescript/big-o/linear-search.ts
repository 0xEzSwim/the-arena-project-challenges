import { PredicateFn, SearchFn } from ".";

export const linearSearch: SearchFn = <T>(arr: T[], predicate: PredicateFn<T>): T | undefined => {
    let i: number = 0;
    while (i < arr.length) {
        if (predicate(arr[i])) {
            return arr[i];
        }
        i++;
    }

    return;
}