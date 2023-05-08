import { Link, llGetLast } from ".";

type MergeFn = <T> (listA: Link<T> | null, listB: Link<T> | null) => Link<T> | null;

export const llMerge: MergeFn = <T> (listA: Link<T> | null, listB: Link<T> | null): Link<T> | null => {    
    if(!listA) {
        return listB;
    }
    const lastLink = llGetLast(listA);
    lastLink!.next = listB;

    return listA;
};