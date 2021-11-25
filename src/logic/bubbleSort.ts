function bubbleSort(array: {number: number, active: boolean}[], setArray: React.Dispatch<React.SetStateAction<{number: number, active: boolean}[]>>) {
    var done = false;
    while(!done) {
        done = true;
        for(var i=0; i<array.length-1; i++) {
            array[i]["active"] = true;
            setArray([...array]);
            if(array[i]["number"] > array[i+1]["number"]) {
                var firstElement =  array[i]
                array[i] = array[i+1]
                array[i+1] = firstElement
                done = false;
                setArray([...array])
            }
            array[i]["active"] = false;
            array[i+1]["active"] = false;
            setArray([...array])
        }
    }
    return array;
}

export default bubbleSort;