function querySelectorAll(selector) {
    const parts = selector.split(' < ');
    const [parentSelector, childSelector] = parts;

    if (parts.length === 2) {
        const parentElements = document.querySelectorAll(parentSelector);
        const selectedElements = [];

        parentElements.forEach((parentElement) => {
            const matchingChildren = parentElement.querySelectorAll(childSelector);

            if ([...matchingChildren].some(child => child.parentElement === parentElement)) {
                selectedElements.push(parentElement);
            }
        });

        return selectedElements;
    } else {
        return document.querySelectorAll(selector);
    }
};

module.exports = { querySelectorAll };