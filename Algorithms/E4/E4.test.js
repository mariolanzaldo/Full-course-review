const mergeArrays = require('./E4');

test('Higher value in the large array', () => {
    const largeArray = [1, 3, 5, 7, 9].concat(new Array(5));
    const smallArray = [0, 2, 4, 6, 8];

    const largeArraySize = largeArray.length;
    mergeArrays(largeArray, smallArray);

    expect(largeArraySize === largeArray.length).toBe(true);

    expect(largeArray).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
});
//TODO: uncomment these lines of code!
// test('Higher value in the small array', () => {
//     const largeArray = [1, 3, 5, 7, 8].concat(new Array(5));
//     const smallArray = [0, 2, 4, 6, 9];

//     const largeArraySize = largeArray.length;
//     mergeArrays(largeArray, smallArray);

//     expect(largeArraySize === largeArray.length).toBe(true);

//     expect(largeArray).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
// });

// test('Same array', () => {
//     const largeArray = [1, 3, 5, 7, 8].concat(new Array(5));
//     const smallArray = [1, 3, 5, 7, 8];

//     const largeArraySize = largeArray.length;
//     mergeArrays(largeArray, smallArray);

//     expect(largeArraySize === largeArray.length).toBe(true);
//     expect(largeArray).toEqual([1, 1, 3, 3, 5, 5, 7, 7, 8, 8]);


// });

// test('Array already ordered', () => {
//     const largeArray = [1, 3, 5, 7, 8].concat(new Array(5));
//     const smallArray = [9, 10, 15, 17, 18];

//     const largeArraySize = largeArray.length;
//     mergeArrays(largeArray, smallArray);

//     expect(largeArraySize === largeArray.length).toBe(true);
//     expect(largeArray).toEqual([1, 3, 5, 7, 8, 9, 10, 15, 17, 18]);
// });

