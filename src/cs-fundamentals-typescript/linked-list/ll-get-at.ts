import { Link } from ".";

type GetAtFn = <T> (list: Link<T> | null, index: number) => Link<T> | undefined;

export const llGetAt: GetAtFn = <T>(list: Link<T> | null, index: number): Link<T> | undefined => {
    if(!list) {
        return undefined;
    } else if(index == 0) {
        return list;
    }
    
    return llGetAt(list.next, index-1);
};