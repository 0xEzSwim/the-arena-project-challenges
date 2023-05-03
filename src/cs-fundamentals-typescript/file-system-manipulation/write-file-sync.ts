import { writeSync, openSync, closeSync } from 'fs';

type WriteFileSyncFn = (path: string, buffer: Buffer) => number;

export const writeFileSync: WriteFileSyncFn = (path: string, buffer: Buffer): number => {
    const fd = openSync(path, 'w');
    const n = writeSync(fd, buffer, 0, buffer.length);

    closeSync(fd);
    return n;
}