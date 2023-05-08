import { Link } from ".";

type CountFn = <T> (list: Link<T> | null) => number;

export const llCount: CountFn = <T>(list: Link<T> | null): number => {
    if(!list) {
        return 0;
    }
    
    return 1 + llCount(list.next);
};