import { Dispatch, SetStateAction } from "react";
import { sleep } from '.';

async function mergeSort(array: {number: number, active: boolean}[], setArray: Dispatch<SetStateAction<{number: number, active: boolean}[]>>) {
    if (array.length === 1) {
        return array
    }
    var left: any[] = await mergeSort(array.slice(0, array.length/2), setArray);
    var right: any[] = await mergeSort(array.slice(array.length/2, array.length), setArray);
    var newArray = [];
    while(left.length !== 0 && right.length !== 0) {
        if (left[0]["number"] > right[0]["number"]) {
            newArray.push(right.shift());
        } else {
            newArray.push(left.shift());
        }
    }

    while(left.length !== 0) {
        newArray.push(left.shift());
    }

    while(right.length !== 0) {
        newArray.push(right.shift());
    }
    setArray(newArray);
    await sleep(1);
    return newArray;
}

export default mergeSort;