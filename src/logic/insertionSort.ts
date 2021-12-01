import { Dispatch, SetStateAction } from "react";
import { sleep } from '.';

async function insertionSort(array: {number: number, active: boolean}[], setArray: Dispatch<SetStateAction<{number: number, active: boolean}[]>>) {
    for(var i=0; i<array.length-1; i++) {
        if(array[i]["number"] > array[i+1]["number"]) {
            var firstElement = array[i];
            array[i] = array[i+1];
            array[i+1] = firstElement;
            array[i] = {number: array[i]["number"], active: false};
            array[i+1] = {number: array[i+1]["number"], active: false};
            for(var j=i; j>0; j--) {
                if(array[j]["number"]<array[j-1]["number"]){
                    var firstEl = array[j];
                    array[j] = array[j-1];
                    array[j-1] = firstEl;
                }
            }
        }
        setArray([...array]);
        await sleep(1);
    }
    return array;
}

export default insertionSort;