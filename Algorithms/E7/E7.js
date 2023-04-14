function longestRunOfTwoNumbers(string) {
    let start = 0;
    let output = string[0];
    let i = 0;
    let counter = {
        [string[0]]: 1,
    };

    let tempStart, tempi = 0;

    let counterKey = 1;

    while (i < string.length) {
        if (counterKey > 2) {
            counter[string[start]]--;

            if (counter[string[start]] === 0) {
                counterKey--;
            }

            start++;
        }

        if (counterKey < 3) {
            tempStart = start;
            tempi = i;
        }
        i++;

        if (!counter[string[i]]) {
            counterKey++;
        }

        counter[string[i]] = (counter[string[i]] ?? 0) + 1;

    }

    output = string.substring(tempStart, tempi + 1);

    return output;
}

module.exports = longestRunOfTwoNumbers;