import { Link } from ".";

type ReverseFn = <T> (list: Link<T> | null) => Link<T> | null;

export const llReverse: ReverseFn = <T> (list: Link<T> | null): Link<T> | null =>{
    let current = list;
    let previous: Link<T> | null = null;

    while (current) {
        const next = current.next;

        current.next = previous;
        previous = current;
        current = next;
    }

    return previous;
}