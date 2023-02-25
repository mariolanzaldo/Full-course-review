const findIndexElement = (array) => {

    for (let i = 0; i < array.length; i++) {
        let leftTotal = array.slice(0, i).reduce((accumulator, currentValue) => {
            return accumulator + currentValue;
        }, 0);

        let rightTotal = array.slice(i).reduce((accumulator, currentValue) => accumulator + currentValue, 0);

        if (leftTotal === rightTotal) {
            return i - 1;
        }
    }
    return -1;
};

module.exports = findIndexElement;