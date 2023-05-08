import { Link, llGetAt  } from ".";

type DeleteAtFn = <T> (list: Link<T> | null, index: number) => Link<T> | undefined;

export const llDeleteAt: DeleteAtFn = <T>(list: Link<T> | null, index: number): Link<T> | undefined => {
    const [previous, current, next] = [
        llGetAt(list, index - 1),
        llGetAt(list, index),
        llGetAt(list, index + 1),
    ];
    if (!current) {
        return undefined;
    }

    if (previous) {
        previous.next = next ?? null;
    }

    return current;
};