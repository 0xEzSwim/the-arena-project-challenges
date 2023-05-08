import { Link } from ".";

type CallbackFn<T> = (elem: Link<T>, index: number) => void;
type ForEachFn = <T> (list: Link<T> | null, cb: CallbackFn<T>) => void;

export const llForEach: ForEachFn = <T>(list: Link<T> | null, cb: CallbackFn<T>) => {
    let current = list;
    let i = 0;
    while(current) {
        cb(current, i);
        current = current.next;
        i++;
    }
};