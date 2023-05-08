import { Link } from ".";

type UltimergeFn = <T> (listA: Link<T> | null, listB: Link<T> | null) => Link<T>|null;

export const llUltimerge: UltimergeFn = <T> (listA: Link<T> | null, listB: Link<T> | null): Link<T> | null => {    
    let currentA = listA;
    let currentB = listB;
    let ultimerged: Link<T> | null = null;
    let curUltimerged: Link<T> | null = null;

    while (currentA || currentB) {
        if (currentA) {
            if (!curUltimerged) {
                curUltimerged = ultimerged = currentA;
            } else {
                curUltimerged.next = currentA;
                curUltimerged = curUltimerged.next;
            }
            currentA = currentA.next;
        }
        if (currentB) {
            if (!curUltimerged) {
                curUltimerged = ultimerged = currentB;
            } else {
                curUltimerged.next = currentB;
                curUltimerged = curUltimerged.next;
            }
            currentB = currentB.next;
        }
    }

    return ultimerged;
};