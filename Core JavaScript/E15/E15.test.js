const findIndexElement = require('./E15');

test("Basic test", () => {
    let array = [1, 2, 3, 4, 9, 9, 2, 7, 10, 13];
    const output = findIndexElement(array);
    expect(output).toBe(6);
});

test("Small array", () => {
    let array = [1, 1, 2];
    const output = findIndexElement(array);
    expect(output).toBe(1);
});