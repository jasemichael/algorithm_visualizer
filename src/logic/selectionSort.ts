function selectionSort(array: {number: number, active: boolean}[]) {
    var queue = [];
    for(var i=0; i<array.length; i++) {
        // find smallest element's index
        var minIndex = i;
        for(var j=i; j<array.length; j++) { 
            if (array[j]["number"] < array[minIndex]["number"]) {
                minIndex = j;
            }
        }
        var element = array[i];
        array[i] = array[minIndex];
        array[minIndex] = element;
        queue.push([...array])
    }
    return queue;
}

export default selectionSort;