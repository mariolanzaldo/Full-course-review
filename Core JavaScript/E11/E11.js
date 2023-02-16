function querySelectorAll(selector) {

    const output = [];

    const [parentSelector, childSelector] = selector.split('<');

    const parents = document.querySelectorAll(parentSelector);

    for (const element of parents) {
        const child = element.querySelector(`:scope > ${childSelector}`);

        if (child) {
            output.push(element);
        }
    }

    return output
};

module.exports = { querySelectorAll };