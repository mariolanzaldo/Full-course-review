function mergeArrays(largeArray, smallArray) {

    let largeArrayIndex = largeArray.length - 1;
    let smallArrayIndex = smallArray.length - 1;

    let differenceIndex = largeArrayIndex - smallArrayIndex - 1;
    let i = largeArrayIndex;

    while (i >= 0) {
        largeArray[differenceIndex] > smallArray[smallArrayIndex] ?
            ([largeArray[i], largeArray[differenceIndex]] = [largeArray[differenceIndex], largeArray[i]], differenceIndex--) :
            ([largeArray[i], smallArray[smallArrayIndex]] = [smallArray[smallArrayIndex], largeArray[i]], smallArrayIndex--)

        if (smallArrayIndex < 0) break;
        i--;
    }
    const output = largeArray.filter((element) => element !== undefined);

    return output;
}

const largeArray = [1, 3, 5, 7, 9].concat(new Array(5));
const smallArray = [0, 2, 4, 6, 8];

// const largeArraySize = largeArray.length;
const output = mergeArrays(largeArray, smallArray);
console.log(output);

module.exports = mergeArrays;