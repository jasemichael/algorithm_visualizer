function mergeSort(array: {number: number, active: boolean}[]) {
    if (array.length === 1) {
        return array
    }
    mergeSort(array.slice(0, array.length/2));
    mergeSort(array.slice(array.length/2, array.length));
}

export default mergeSort;