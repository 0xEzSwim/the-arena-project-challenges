export type Link<T> = {
    data: T,
    next: Link<T> | null
};

export const llPrint = (node: Link<any> | null, message: string = ''): void => {
  if(message) {
    process.stdout.write(`${message}\n`);
  }  
  process.stdout.write(`${node ? node.data : null}`);
    if(node?.next) {
      process.stdout.write(" -> ");
      llPrint(node.next);
    } else {
      process.stdout.write(`\n`);
    }
};

export * from './ll-create-link';
export * from './ll-unshift';
export * from './ll-add-after';
export * from './ll-count';
export * from './ll-get-last';
export * from './ll-push';
export * from './ll-get-at';
export * from './ll-delete-at';
export * from './ll-shift';
export * from './ll-insert-at';
export * from './ll-pop';
export * from './ll-for-each';
export * from './ll-map';
export * from './ll-find';
export * from './ll-merge';
export * from './ll-reverse';
export * from './ll-ultimerge';