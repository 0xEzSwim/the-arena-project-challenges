import { Link } from ".";

type PopFn = <T> (list: Link<T> | null) => Link<T> | undefined;

export const llGetBeforeLast = <T>(list: Link<T> | null): Link<T> | null => {
    if(list?.next?.next) {
        return llGetBeforeLast(list.next);
    }
    
    return list;
};

export const llPop: PopFn = <T>(list: Link<T> | null): Link<T> | undefined => {
    const beforeLastLink = llGetBeforeLast(list);
    const lastLink = beforeLastLink?.next;
    if(beforeLastLink) {
        beforeLastLink.next = null;
    }
    
    return lastLink ?? beforeLastLink ?? undefined;
};