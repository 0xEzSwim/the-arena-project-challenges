import { Link } from ".";

type PushFn = <T> (list: Link<T>|null, data: T) => Link<T>;

export const llPush: PushFn = <T>(list: Link<T> | null, data: T): Link<T> => {
    if(list?.next) {
        return llPush(list.next, data);
    }

    const newLink = {
        data: data,
        next: null
    };
    
    if(list) {
        list!.next = newLink;
    }

    return newLink;
};