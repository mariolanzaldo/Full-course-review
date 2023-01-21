const recursiveFlatten = (array) => {

    let flatArray = [];

    for (const element of array) {
        if (!Array.isArray(element)) {
            flatArray.push(element);
        } else if (Array.isArray(element)) {
            flatArray = [...flatArray, ...recursiveFlatten(element)];
        }
    }

    return flatArray;
};

const iterativeFlatten = (array) => {
    let flatArray = [];
    let tempArray = [...array];
    let head;

    while (tempArray.length > 0) {
        let element = tempArray.shift();
        if (!Array.isArray(element)) {
            flatArray.push(element);
        } else if (Array.isArray(element)) {
            tempArray.unshift.apply(tempArray, element);
        }

    }

    return flatArray;
};

module.exports = {
    recursiveFlatten,
    iterativeFlatten,
}