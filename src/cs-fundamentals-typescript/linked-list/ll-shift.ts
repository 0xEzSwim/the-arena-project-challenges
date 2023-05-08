import { Link } from ".";

type ShiftFn = <T> (list: Link<T> | null) => Link<T> | undefined;

export const llShift: ShiftFn = <T>(list: Link<T> | null): Link<T> | undefined => {
    if(!list) {
        return undefined;
    }
    const nextLink = list.next ?? undefined;
    list.next = null;
    
    return nextLink;
};