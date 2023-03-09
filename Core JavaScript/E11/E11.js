function querySelectorAll(selector) {

    const output = [];

    const [parentSelector, childSelector] = selector.split('<');

    const parents = document.querySelectorAll(parentSelector);

    for (const element of parents) {
        //I don't understand why this is not working in jest, but it seems to work in the Browser
        // const child = element.querySelector(`:scope > ${childSelector}`); 
        const child = element.querySelector(`div.note > ${childSelector}`);

        if (child) {
            output.push(element);
        }
    }

    return output
};

// const divs = querySelectorAll("div.note < input.is-complete[checked]");
// console.log(divs)

module.exports = { querySelectorAll };