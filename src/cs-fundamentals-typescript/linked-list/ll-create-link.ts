import { Link } from ".";

type CreateLinkFn = <T> (data: T) => Link<T>;

export const llCreateLink: CreateLinkFn = <T>(data: T): Link<T> => {
    return {
        data: data,
        next: null
    };
};