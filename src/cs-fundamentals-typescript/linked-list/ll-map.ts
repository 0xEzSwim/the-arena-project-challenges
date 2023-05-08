import { Link } from ".";

type CallbackFn<T, R> = (elem: Link<T>, index: number) => R;

type MapFn = <T, R> (list: Link<T> | null, cb: CallbackFn<T, R>) => Array<R>;

export const llMap: MapFn = <T, R>(list: Link<T> | null, cb: CallbackFn<T, R>): Array<R> => {
    let current = list;
    let i = 0;
    let newList: Array<R> = [];
    while(current) {
        newList.push(cb(current, i));
        current = current.next;
        i++;
    }

    return newList;
};