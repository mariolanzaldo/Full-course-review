function longestRunOfTwoNumbers(string) {
    let start = 0;
    let output = string[0];
    let i = 0;

    while (i < string.length) {
        let slicedString = string.substring(start, i + 1);
        let isolatedComponents = new Set(slicedString);

        if (isolatedComponents.size > 2) {
            start++;
        }

        if (isolatedComponents.size < 3) {
            output = slicedString;
        }
        i++;
    }

    return output;
}

module.exports = longestRunOfTwoNumbers;