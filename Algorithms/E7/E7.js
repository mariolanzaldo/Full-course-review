function longestRunOfTwoNumbers(numberString) {
    if (numberString.length < 3) {
        return numberString;
    }
    let output = numberString[0];
    let start = 0;
    let isolatedNumbers = new Set(numberString[0]);

    for (let i = 0; i < numberString.length; i++) {
        let temp;
        // const section = numberString.slice(start, i++);
        // console.log(section);
        // let isolatedNumbers = new Set(section);
        isolatedNumbers.add(numberString[i]);
        console.log(isolatedNumbers.size)
        // if (isolatedNumbers.size === 1) {
        //     console.log(i);
        //     start = i;
        // }
        if (isolatedNumbers.size <= 2 && i > 0) {
            temp = numberString.slice(start, i + 1);
            isolatedNumbers = new Set(numberString[i + 1]);
            // console.log(isolatedNumbers)
            console.log(temp);
            start = i;
            if (temp.length > output.length) {
                console.log(temp);
                output = temp;
            }
        }
        // console.log(isolatedNumbers.size);
        console.log(output);

        // console.log(substring);
    }
    return output;
};


const input = "1212223311212223";
// const input = "11";
const output = longestRunOfTwoNumbers(input);
console.log(output);

module.exports = longestRunOfTwoNumbers;