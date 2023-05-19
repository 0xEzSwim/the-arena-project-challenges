type SearchFn = (arr: number[], value: number) => number | undefined;

export const binarySearch: SearchFn = (arr: number[], value: number): number | undefined => {
    let mid = Math.floor(arr.length / 2);
    if(arr[mid] < value) {
        return binarySearch(arr.slice(mid + 1), value);
    }
    else if(arr[mid] > value) {
        return binarySearch(arr.slice(0, mid), value);
    }

    return arr[mid] == value ? value : undefined;
};