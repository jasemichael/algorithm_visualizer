function bubbleSort(array: {number: number, active: boolean}[]) {
    var queue = [];
    var done = false;
    while(!done) {
        done = true;
        for(var i=0; i<array.length-1; i++) {
            if(array[i]["number"] > array[i+1]["number"]) {
                const firstElement =  array[i]
                array[i] = array[i+1]
                array[i+1] = firstElement
                done = false;
            }
        }
        queue.push([...array]);
    }
    return queue;
}

export default bubbleSort;