const printTree = (tree, array) => {
    const arrayTree = convertToArray(tree);

    const isSymmetic = isSymmetric(arrayTree, array);

    return isSymmetic;
};

function isSymmetric(strArr) {
    for (let level = 0; (2 ** (level + 1)) - 1 <= strArr.length; level++) {
        let row = strArr.slice((2 ** level) - 1, (2 ** (level + 1) - 1));

        const left = JSON.stringify(row);

        const right = JSON.stringify(row.map((e, i, a) => a[(a.length - 1) - i]));

        if (left !== right) {
            return false;
        }
    }
    return true;
}


const convertToArray = (tree) => {
    let temp = '';

    for (let i = 0; i < tree.length; i++) {
        if (tree[i] === ',') {
            temp += ',';
        } else if (tree[i] === '(') {
            temp += '[';
        } else if (tree[i] === ')') {
            temp += ']';
        } else {
            temp += '"' + tree[i] + '"';
        }
    };

    const arrayTree = eval(temp);

    return arrayTree;
};

module.exports = printTree;