import { Link } from ".";

type UnshiftFn = <T> (head: Link<T> | null, data: T) => Link<T>;

export const llUnshift: UnshiftFn = <T>(head: Link<T> | null, data: T): Link<T> => {
    const newLink = {
        data: data,
        next: head
    };

    return newLink;
};