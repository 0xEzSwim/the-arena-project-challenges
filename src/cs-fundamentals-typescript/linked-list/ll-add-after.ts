import { Link } from ".";

type AddAfterFn = <T> (link: Link<T>|null, data: T) => Link<T>;

export const llAddAfter: AddAfterFn = <T>(link: Link<T>|null, data: T): Link<T> => {
    const newLink = {
        data: data,
        next: link ? link!.next : null
    };
    if(link) {
        link!.next = newLink;
    }

    return newLink;
};