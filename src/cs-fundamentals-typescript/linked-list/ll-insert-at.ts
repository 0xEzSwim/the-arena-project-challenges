import { Link, llGetAt  } from ".";

type InsertAtFn = <T> (list: Link<T> | null, index: number, data: T) => Link<T> | undefined;

export const insertAt: InsertAtFn = <T>(list: Link<T> | null, index: number, data: T): Link<T> | undefined => {
    const [previous, current] = [
        llGetAt(list, index - 1),
        llGetAt(list, index)
    ];
    
    if (!current && index !== 0) {
        return undefined;
    }

    const newLink: Link<T> = {
        data: data,
        next: current ?? null,
    }

    if (previous) {
        previous.next = newLink;
    }

    return newLink;
}