export function mergeSort(array) {
    const animations = [];
    if (array.length <= 1) return array;
    const auxiliaryArray = array.slice();
    mergeSortHelper(array, 0, array.length - 1, auxiliaryArray, animations);
    return animations;
}

function mergeSortHelper(mainArray, startIndex, endIndex, auxiliaryArray, animations) {
    if (startIndex === endIndex) return;
    const middleIndex = Math.floor((startIndex + endIndex) / 2);
    mergeSortHelper(auxiliaryArray, startIndex, middleIndex, mainArray, animations);
    mergeSortHelper(auxiliaryArray, middleIndex + 1, endIndex, mainArray, animations);
    doMerge(mainArray, startIndex, middleIndex, endIndex, auxiliaryArray, animations);
}

function doMerge(mainArray, startIndex, middleIndex, endIndex, auxiliaryArray, animations) {
    let k = startIndex;
    let i = startIndex;
    let j = middleIndex + 1;
    while (i <= middleIndex && j <= endIndex) {
        animations.push([i, j]);
        animations.push([i, j]);
        if (auxiliaryArray[i] <= auxiliaryArray[j]) {
            animations.push([k, auxiliaryArray[i]]);
            mainArray[k++] = auxiliaryArray[i++];
        } else {
            animations.push([k, auxiliaryArray[j]]);
            mainArray[k++] = auxiliaryArray[j++];
        }
    }
    while (i <= middleIndex) {
        animations.push([i, i]);
        animations.push([i, i]);
        animations.push([k, auxiliaryArray[i]]);
        mainArray[k++] = auxiliaryArray[i++];
    }
    while (j <= endIndex) {
        animations.push([j, j]);
        animations.push([j, j]);
        animations.push([k, auxiliaryArray[j]]);
        mainArray[k++] = auxiliaryArray[j++];
    }
}

export function quickSort(array) {
    const animations = [];
    if (array.length <= 1) return array;
    const startingPosition = 0;
    quickSortHelper(array, animations, startingPosition);
    return animations;
}

function quickSortHelper(array, animations, startIndex) {
    if (array.length <= 1) return;
    const lowerArray = [];
    const higherArray = [];
    const pivotValue = array[array.length - 1];
    for (let i = 0; i < array.length - 1; i++) {
        if (array[i] <= pivotValue) {
            lowerArray.push(array[i]);
        } else {
            higherArray.push(array[i]);
        }
    }
    quickSortMerge(array, lowerArray, higherArray, pivotValue, animations, startIndex)
    quickSortHelper(lowerArray, animations, startIndex);
    quickSortHelper(higherArray, animations, startIndex + lowerArray.length + 1);
}

function quickSortMerge(array, lowerArray, higherArray, pivotValue, animations, startIndex) {
    let k = 0;
    for (let i = 0; i < lowerArray.length; i++) {
        animations.push([k + startIndex, array.length - 1])
        animations.push([k + startIndex, array.length - 1])
        animations.push([k + startIndex, lowerArray[i]]);
        array[k] = lowerArray[i];
        k++;
    }
    animations.push([k + startIndex, array.length - 1]);
    animations.push([k + startIndex, array.length - 1]);
    animations.push([k + startIndex, pivotValue]);
    array[k] = pivotValue;
    k++;
    for (let i = 0; i < higherArray.length; i++) {
        animations.push([k + startIndex, array.length - 1])
        animations.push([k + startIndex, array.length - 1])
        animations.push([k + startIndex, higherArray[i]]);
        array[k] = higherArray[i];
        k++;
    }
}

export function bubbleSort(array) {
    const animations = [];
    let arraySorted = false;
    let counter = 0;
    while (!arraySorted) {
        let i = 0;
        arraySorted = true;
        while (i < array.length - 1 - counter) {
            animations.push([i, i + 1]);
            animations.push([i, i + 1]);
            if (array[i] > array[i + 1]) {
                arraySorted = false;
                const temp = array[i];
                array[i] = array[i + 1];
                array[i + 1] = temp;
            }
            animations.push([i, array[i]]);
            animations.push([i + 1, array[i + 1]]);
            i++;
        }
        counter++;
    }
    return animations;
}