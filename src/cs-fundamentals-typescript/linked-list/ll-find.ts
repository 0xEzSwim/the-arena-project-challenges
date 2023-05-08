import { Link } from ".";

type CallbackFn<T> = (elem: Link<T>) => boolean;
type FindFn = <T> (list: Link<T> | null, cb: CallbackFn<T>) => Link<T> | undefined;

export const llFind: FindFn = <T>(list: Link<T> | null, cb: CallbackFn<T>): Link<T> | undefined => {
    let current = list;
    while(current) {
        if(cb(current)) {
            return current;
        }
        current = current.next;
    }

    return undefined;
};