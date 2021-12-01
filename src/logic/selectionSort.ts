import { Dispatch, SetStateAction } from "react";
import { sleep } from '.';

async function selectionSort(array: {number: number, active: boolean}[], setArray: Dispatch<SetStateAction<{number: number, active: boolean}[]>>) {
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
        setArray([...array]);
        await sleep(1);
    }
    return array;
}

export default selectionSort;