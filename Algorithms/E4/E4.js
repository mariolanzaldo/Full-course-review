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

module.exports = mergeArrays;