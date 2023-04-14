const mergeArrays = require('./E4');

test.skip('Higher value in the large array', () => {
    const largeArray = [1, 3, 5, 7, 9].concat(new Array(5));
    const smallArray = [0, 2, 4, 6, 8];

    const largeArraySize = largeArray.length;
    mergeArrays(largeArray, smallArray);

    expect(largeArraySize === largeArray.length).toBe(true);

    expect(largeArray).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
});

test.skip('Large array contains empty spaces', () => {
    const smallArr = [0, 7];
    const largeArr = [0, 2, 4, 7, ,].concat(new Array(2));

    const result = mergeArrays(largeArr, smallArr);

    expect(largeArr).toEqual([0, 0, 2, 4, 7, 7]);

});

test.skip('Small array contains empty spaces', () => {
    const smallArr = [0, 7, ,];
    const largeArr = [0, 2, 4, 7].concat(new Array(2));

    const result = mergeArrays(largeArr, smallArr);

    expect(largeArr).toEqual([0, 0, 2, 4, 7, 7]);

});

test.skip('Both arrays contain empty spaces', () => {
    const smallArr = [0, 7, ,];
    const largeArr = [0, 2, 4, 7, ,].concat(new Array(2));

    const result = mergeArrays(largeArr, smallArr);

    expect(largeArr).toEqual([0, 0, 2, 4, 7, 7]);

});

test.skip('Higher value in the small array', () => {
    const largeArray = [1, 3, 5, 7, 8].concat(new Array(5));
    const smallArray = [0, 2, 4, 6, 9];

    const largeArraySize = largeArray.length;
    mergeArrays(largeArray, smallArray);

    expect(largeArraySize === largeArray.length).toBe(true);

    expect(largeArray).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
});

test.skip('Same array', () => {
    const largeArray = [1, 3, 5, 7, 8].concat(new Array(5));
    const smallArray = [1, 3, 5, 7, 8];

    const largeArraySize = largeArray.length;
    mergeArrays(largeArray, smallArray);

    expect(largeArraySize === largeArray.length).toBe(true);
    expect(largeArray).toEqual([1, 1, 3, 3, 5, 5, 7, 7, 8, 8]);


});

test.skip('Array already ordered', () => {
    const largeArray = [1, 3, 5, 7, 8].concat(new Array(5));
    const smallArray = [9, 10, 15, 17, 18];

    const largeArraySize = largeArray.length;
    mergeArrays(largeArray, smallArray);

    expect(largeArraySize === largeArray.length).toBe(true);
    expect(largeArray).toEqual([1, 3, 5, 7, 8, 9, 10, 15, 17, 18]);
});

test.skip("Array with repeated elements", () => {
    const largeArray = [1, 2, 3, 5, 6, 7, 8, 12].concat(new Array(8));
    const smallArray = [0, 1, 2, 4, 6, 8, 9, 19];
    const result = mergeArrays(largeArray, smallArray);

    expect(result).toEqual([0, 1, 1, 2, 2, 3, 4, 5, 6, 6, 7, 8, 8, 9, 12, 19])
});

