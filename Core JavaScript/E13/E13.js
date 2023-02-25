const isSameLevel = (tree, array, n1, n2) => {
    let output;
    let level = 0;

    const arrayTree = convertToArray(tree);

    const stringArray = JSON.stringify(arrayTree);


    const sameLevel = prefixOrder(arrayTree, array, level, n1, n2);

    if (!stringArray.includes(n1) || !stringArray.includes(n2)) {
        return 'Not in tree';
    }

    if (sameLevel[0] === sameLevel[1]) {
        return 'Numbers found at the same level';
    } else if (sameLevel[0] !== sameLevel[1]) {
        return 'Numbers not found at the same level';
    }
};

const prefixOrder = (tree, array, level, n1, n2) => {
    const [root, left, right] = tree;
    // let leftN1, rightN1, leftN2, rightN2;

    if (root) {
        if (root === n1 || root === n2) {
            array.push(level);
        }
        level++;
        if (left) {
            prefixOrder(left, array, level, n1, n2);
        }
        if (right) {
            prefixOrder(right, array, level, n1, n2);
        }
    }
    return array;
};

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

module.exports = isSameLevel;
