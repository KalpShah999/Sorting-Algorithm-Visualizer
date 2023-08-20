// This is the main merge sort algorithm that creates the global variables for the merge sort method (mergeSortHelper)
export function mergeSort(array) {
    const animations = [];
    
    // Return the blank animations if the array is of size 1 (since it is already sorted) 
    if (array.length <= 1) return array;
    
    // Sort the array and return the associated animations 
    const auxiliaryArray = array.slice();
    mergeSortHelper(array, 0, array.length - 1, auxiliaryArray, animations); // Sort the entire array 
    return animations;
}

function mergeSortHelper(mainArray, startIndex, endIndex, auxiliaryArray, animations) {
    // Break condition to check if the array is of size 1, meaning it is already sorted (stops recursion)
    if (startIndex === endIndex) return;

    // Calculate the middle index of the array 
    const middleIndex = Math.floor((startIndex + endIndex) / 2);

    // Sort each half of the array (recursive call) 
    mergeSortHelper(auxiliaryArray, startIndex, middleIndex, mainArray, animations);
    mergeSortHelper(auxiliaryArray, middleIndex + 1, endIndex, mainArray, animations);

    // Merge the two arrays together into one larger sorted array (adds animations as well)
    doMerge(mainArray, startIndex, middleIndex, endIndex, auxiliaryArray, animations);
}

// This method merges two small arrays together into one larger array 
// This is also the function that adds the animations to represent the merge sort occuring 
function doMerge(mainArray, startIndex, middleIndex, endIndex, auxiliaryArray, animations) {
    // Create pointer variables 
    let k = startIndex;
    let i = startIndex;
    let j = middleIndex + 1;

    // Loop through both smaller arrays until one of them is complete 
    while (i <= middleIndex && j <= endIndex) {
        // Add the indices of the two values being compared to the animations list 
        animations.push([i, j]);
        animations.push([i, j]);

        // If the first value is smaller than the second, add the first to the larger sorted array 
        if (auxiliaryArray[i] <= auxiliaryArray[j]) {
            // Push the new value of the first array at that index to the larger array and animations 
            animations.push([k, auxiliaryArray[i]]);
            mainArray[k++] = auxiliaryArray[i++];
        } else {
            // Push the new value of the second array at that index to the larger array and animations 
            animations.push([k, auxiliaryArray[j]]);
            mainArray[k++] = auxiliaryArray[j++];
        }
    }

    // Loop through the rest of the first array if the second one finished first 
    while (i <= middleIndex) {
        // Add the indices of the two values being compared to the animations list 
        animations.push([i, i]);
        animations.push([i, i]);
        // Push the new value of the first array at that index to the larger array and animations 
        animations.push([k, auxiliaryArray[i]]);
        mainArray[k++] = auxiliaryArray[i++];
    }

    // Loop through the rest of the second array if the first one finished first 
    while (j <= endIndex) {
        // Add the indices of the two values being compared to the animations list 
        animations.push([j, j]);
        animations.push([j, j]);
        // Push the new value of the second array at that index to the larger array and animations 
        animations.push([k, auxiliaryArray[j]]);
        mainArray[k++] = auxiliaryArray[j++];
    }
}

// This is the main quickSort algorithm that creates the global variables for the quick sort method (quickSortHelper)
export function quickSort(array) {
    const animations = [];
    
    // Return the blank animations if the array is of size 1 (since it is already sorted) 
    if (array.length <= 1) return animations;

    const startingPosition = 0;
    
    // Sort the array and return the associated animations 
    quickSortHelper(array, animations, startingPosition);
    return animations;
}

// This is the main function that implements the logic of quick sort 
//   (Logic: Set a pivot value, and move all values smaller before the pivot, and larger after recursively)
function quickSortHelper(array, animations, startIndex) {
    if (array.length <= 1) return;

    // Create two smaller arrays to represent the values to the left and right of the pivot value 
    const lowerArray = [];
    const higherArray = [];
    const pivotValue = array[array.length - 1]; // Let the pivot be the last value of the array 

    // Loop through all of the values in the array to fill the two arrays 
    for (let i = 0; i < array.length - 1; i++) {
        if (array[i] <= pivotValue) {
            lowerArray.push(array[i]); // Add the value to the lower array if it is smaller than the pivot 
        } else {
            higherArray.push(array[i]);// Add the value to the higher array if it is larger than the pivot 
        }
    }

    // Add the animations of moving these values to the left and right of the pivot 
    quickSortMerge(array, lowerArray, higherArray, pivotValue, animations, startIndex)

    // Recursively sort the left side array and the right side array 
    quickSortHelper(lowerArray, animations, startIndex);
    quickSortHelper(higherArray, animations, startIndex + lowerArray.length + 1);
}

// This is the function that adds the animations to represent the quick sort occuring 
function quickSortMerge(array, lowerArray, higherArray, pivotValue, animations, startIndex) {
    let k = 0;
    
    // Add the animations for all the lower array 
    for (let i = 0; i < lowerArray.length; i++) {
        // Add the indices of the two points being compared 
        animations.push([k + startIndex, array.length - 1]);
        animations.push([k + startIndex, array.length - 1]);
        // Add the new values of the array at that index 
        animations.push([k + startIndex, lowerArray[i]]);
        array[k] = lowerArray[i];
        k++;
    }

    // Add the animations for the pivot point 
    // Add the indices of the two points being compared 
    animations.push([k + startIndex, array.length - 1]);
    animations.push([k + startIndex, array.length - 1]);
    // Add the new values of the array at that index 
    animations.push([k + startIndex, pivotValue]);
    array[k] = pivotValue;
    k++;

    // Add the animations for the higher array 
    for (let i = 0; i < higherArray.length; i++) {
        // Add the indices of the two points being compared 
        animations.push([k + startIndex, array.length - 1]);
        animations.push([k + startIndex, array.length - 1]);
        // Add the new values of the array at that index 
        animations.push([k + startIndex, higherArray[i]]);
        array[k] = higherArray[i];
        k++;
    }
}

// Yet to be implemented 
export function heapSort(array) {
    
}

// Function that takes an array and return the animations representing the animations of swaps 
//    required to sort the array 
export function bubbleSort(array) {
    // Create tracker variables 
    const animations = [];
    let arraySorted = false;
    let counter = 0;

    // Loop through the array continuously until the entire array is sorted 
    while (!arraySorted) {
        let i = 0;
        arraySorted = true;

        // Loop through the array 
        while (i < array.length - 1 - counter) {
            // Push the two values in the array that are being compared to the list of animations 
            // This first push just pushed the indices of the values 
            animations.push([i, i + 1]);
            animations.push([i, i + 1]);

            // If the first value is larger than the value after it, swap them (values) 
            if (array[i] > array[i + 1]) {
                arraySorted = false;
                const temp = array[i];
                array[i] = array[i + 1];
                array[i + 1] = temp;
            }
            
            // Push these new values of the array at the indices into the animations list 
            // This second push adds the new values of the array bars into the list 
            // (This two step animation is what creates the animation stages seen in SortingVisualizer.jsx)
            animations.push([i, array[i]]);
            animations.push([i + 1, array[i + 1]]);

            i++;
        }
        counter++;
    }

    // Return the final animations 
    return animations;
}