const { recursiveFlatten, iterativeFlatten } = require('./E9');

test('Recursive test', () => {
    const array = [1, 2, 3, [4, 5, [6, [[7]], 8]], [9, 10]];

    const output = recursiveFlatten(array);

    const result = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    expect(output).toEqual(result);
});
//TODO: uncomment these lines of code!
// test('Iterative test', () => {
//     const array = [1, 2, 3, [4, 5, [6, [[7]], 8]], [9, 10]];
//     const result = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//     const output = iterativeFlatten(array);

//     expect(output).toEqual(result);
// });

// test('Already flat', () => {
//     const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//     const result = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//     const recursiveOutput = recursiveFlatten(array);
//     const iterativeOutput = iterativeFlatten(array);

//     expect(recursiveOutput).toEqual(result);
//     expect(iterativeOutput).toEqual(result);
// });