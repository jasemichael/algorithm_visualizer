import { Dispatch, SetStateAction } from "react";
import {sleep} from '.';

async function bubbleSort(array: {number: number, active: boolean}[], setArray: Dispatch<SetStateAction<{number: number, active: boolean}[]>>) {
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
       setArray([...array]);
       await sleep(1);
    }
    return array;
}

export default bubbleSort;