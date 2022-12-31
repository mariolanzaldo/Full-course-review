
function reverseBlocks(arr, blockSize) {


    for (let i = 0; i < arr.length; i += blockSize) {
        // let leftSide = i;
        let rightSide = Math.min(i + blockSize - 1, arr.length - 1);

        // while (leftSide < rightSide) {
        //     [arr[rightSide], arr[leftSide]] = [arr[leftSide], arr[rightSide]]
        //     rightSide--;
        //     leftSide++;
        // }

        for (let leftSide = i; leftSide < rightSide; leftSide++) {
            [arr[rightSide], arr[leftSide]] = [arr[leftSide], arr[rightSide]]
            rightSide--;
        }
    }
    return arr;
};

module.exports = reverseBlocks;
