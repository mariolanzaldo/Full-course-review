function mergeArrays(arr1, arrMergeIn) {
    var mergeIndex = 0;

    for (var i = 0; i < arr1.length; ++i) {
        if (!arr1[i]) {
            arr1[i] = arrMergeIn[mergeIndex++];
        }
        let j = i;

        while (j > 0 && arr1[j - 1] > arr1[j]) {
            [arr1[j], arr1[j - 1]] = [arr1[j - 1], arr1[j]]
            j--
        }
    }
    return arr1;
}

module.exports = mergeArrays;