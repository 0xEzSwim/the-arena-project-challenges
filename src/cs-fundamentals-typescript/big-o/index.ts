export type CompareFn<T> = (a: T, b: T) => number;
export type SortFn = <T>(arr: T[], cmp: CompareFn<T>) => T[];
export type PredicateFn<T> = (elem: T) => boolean;
export type SearchFn = <T>(arr: T[], predicate: PredicateFn<T>) => T | undefined;

export * from './insertion-sort';
export * from './bubble-sort';
export * from './merge-sort';
export * from './quick-sort';
export * from './linear-search';
export * from './jump-search';
export * from './binary-search';

