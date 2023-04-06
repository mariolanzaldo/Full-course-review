const findIndexElement = require('./E15');

test.skip("Basic test", () => {
    let array = [1, 2, 3, 4, 9, 9, 2, 7, 10, 13];
    // let array = [1, 1, 2];
    const output = findIndexElement(array);
    expect(output).toBe(6);
});

//TODO: Uncomment these lines!
// test("Small array", () => {
//     let array = [1, 1, 2];
//     const output = findIndexElement(array);
//     expect(output).toBe(1);
// });