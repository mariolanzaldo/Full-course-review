function mergeArrays(arr1, arrMergeIn) {
    let mergeIndex = 0;

    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] === undefined) {
            arr1[i] = arrMergeIn[mergeIndex++];
        }

        let j = i;

        while (j > 0 && arr1[j - 1] > arr1[j]) {
            [arr1[j], arr1[j - 1]] = [arr1[j - 1], arr1[j]]
            j--
        }

    }
    const output = arr1.filter((element) => element !== undefined);

    return output;
}

const largeArray = [1, 3, 5, 7, 9].concat(new Array(5));
const smallArray = [0, 2, 4, 6, 8];

const largeArraySize = largeArray.length;
mergeArrays(largeArray, smallArray);

console.log(largeArray);

module.exports = mergeArrays;