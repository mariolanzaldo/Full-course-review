function querySelectorAll(selector) {
    const output = [];

    const [parentSelector, childSelector] = selector.split('<');

    let parents = document.querySelectorAll(parentSelector);

    for (const parent of parents) {
        const child = parent.querySelectorAll(childSelector);

        if (child.length > 0) {
            output.push(parent);
        }
    }

    return output;
};

const nodeList = querySelectorAll("div.note < input.is-complete[checked]");


module.exports = { querySelectorAll };