function mergeSort(array: {number: number, active: boolean}[]) {
    if (array.length === 1) {
        return array
    }
    var left = mergeSort(array.slice(0, array.length/2));
    var right = mergeSort(array.slice((array.length/2)+1, array.length));
    var newArray = [];
    while(left?.length !== 0 && right?.length !== 0) {
        if (left[0] > right[0]) {
            newArray.push(right?.shift());
        } else {
            newArray.push(left?.shift());
        }
    }

    while(left?.length !== 0) {
        newArray.push(left?.shift());
    }

    while(right?.length !== 0) {
        newArray.push(right?.shift());
    }
    return array;
}

export default mergeSort;