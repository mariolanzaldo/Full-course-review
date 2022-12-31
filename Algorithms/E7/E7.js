function longestRunOfTwoNumbers(numberString) {
    if (numberString.length < 3) {
        return numberString;
    }
    // let strLength = numberString.length;
    // let runStart = 0;
    // let longestRun = numberString[0];

    // for (let i = 1; i < strLength; i++) {
    //     let substring = numberString.slice(runStart, i + 1)
    //     let numbers = new Set(substring);
    //     if (numbers.size < 3 && substring.length > longestRun.length) {
    //         longestRun = substring;
    //     } else if (numbers.size > 2) {
    //         runStart++;
    //     }
    // }
    // return longestRun;
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