const longestRunOfTwoNumbers = require('./E7');

test.skip('Big input test (bigger at the end of string)', () => {
    const input = "1212223311212223";
    const output = longestRunOfTwoNumbers(input);
    expect(output).toEqual("1121222");
});

test.skip('Big input test (bigger at the beginning of string)', () => {
    const input = "12111112223311212223";
    const output = longestRunOfTwoNumbers(input);
    expect(output).toEqual("1211111222");
});

test.skip('Small input test', () => {
    const input = "111";
    const output = longestRunOfTwoNumbers(input);
    expect(output).toEqual("111");
});