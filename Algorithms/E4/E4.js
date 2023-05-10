// function mergeArrays(arr1, arrMergeIn) {
//     let mergeIndex = 0;

//     for (let i = 0; i < arr1.length; i++) {
//         if (arr1[i] === undefined) {
//             arr1[i] = arrMergeIn[mergeIndex++];
//         }
//         console.log(arr1)

//         let j = i;

//         while (j > 0 && arr1[j - 1] > arr1[j]) {
//             [arr1[j], arr1[j - 1]] = [arr1[j - 1], arr1[j]]
//             j--
//         }

//     }
//     const output = arr1.filter((element) => element !== undefined);

//     return output;
// }

// function mergeArrays(largeArray, smallArray) {
//     let largeArrayIndex = largeArray.length - 1;
//     let smallArrayIndex = smallArray.length - 1;

//     let combinedIndexes = largeArrayIndex - smallArrayIndex - 1;
//     let mergeIndex = smallArray.length - 1;

//     for (let i = largeArrayIndex; i >= 0; i--) {
//         if (largeArray[i] === undefined) {
//             largeArray[i] = smallArray[mergeIndex--];
//         }

//         let j = i;

//         while (j > 0 && largeArray[j - 1] > largeArray[j]) {
//             [largeArray[j], largeArray[j - 1]] = [largeArray[j - 1], largeArray[j]]

//             j--;
//         }
//     }

//     const output = largeArray.filter((element) => element !== undefined);

//     console.log(output);
// };

function mergeArrays(largeArray, smallArray) {

    let largeArrayIndex = largeArray.length - 1;
    let smallArrayIndex = smallArray.length - 1;

    let differenceIndex = largeArrayIndex - smallArrayIndex - 1;

    for (let i = largeArrayIndex; i >= 0; i--) {

        largeArray[differenceIndex] > smallArray[smallArrayIndex] ?
            ([largeArray[i], largeArray[differenceIndex]] = [largeArray[differenceIndex], largeArray[i]], differenceIndex--) :
            ([largeArray[i], smallArray[smallArrayIndex]] = [smallArray[smallArrayIndex], largeArray[i]], smallArrayIndex--)

        if (smallArrayIndex < 0) break;
    }

    const output = largeArray.filter((element) => element !== undefined);

    return output;
}

module.exports = mergeArrays;