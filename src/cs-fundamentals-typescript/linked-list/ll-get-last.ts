import { Link } from ".";

type GetLastFn = <T> (list: Link<T> | null) => Link<T> | null;

export const llGetLast: GetLastFn = <T>(list: Link<T> | null): Link<T> | null => {
    if(list?.next) {
        return llGetLast(list.next);
    }
    
    return list;
};