const reverseBlocks = require('./E5');

test.skip('Reverse', () => {
    const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    const blockSize = 3;

    reverseBlocks(arr, blockSize);

    expect(arr).toEqual([
        2, 1, 0, 5, 4, 3, 8, 7, 6, 9
    ]);
});

//TODO: uncomment these lines of code!
// test('Block size in equal parts', () => {
//     const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
//     const blockSize = 2;

//     reverseBlocks(arr, blockSize);

//     expect(arr).toEqual([
//         1, 0, 3, 2, 5,
//         4, 7, 6, 9, 8
//     ]);
// });

// test('Block size equal to array size', () => {
//     const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
//     const blockSize = 15;

//     reverseBlocks(arr, blockSize);

//     expect(arr).toEqual([
//         9, 8, 7, 6, 5, 4, 3, 2, 1, 0
//     ]);
// });

// test('Block size larger than array size', () => {
//     const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
//     const blockSize = 15;

//     reverseBlocks(arr, blockSize);

//     expect(arr).toEqual([
//         9, 8, 7, 6, 5, 4, 3, 2, 1, 0
//     ]);
// });