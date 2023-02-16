const printTree = (tree, order, array) => {
    const arrayTree = convertToArray(tree);

    switch (order) {
        case "prefix":
            array = prefixOrder(arrayTree, array);
            break;
        case "infix":
            array = infixOrder(arrayTree, array);
            break;
        case "postfix":
            array = postfixOrder(arrayTree, array);
            break;
        default:
            array = infixOrder(arrayTree, array);
    }
    return array;
};

const postfixOrder = (tree, array) => {
    const [root, left, right] = tree;

    if (root) {
        if (left) postfixOrder(left, array);

        if (right) postfixOrder(right, array);

        array.push(root);
    }

    return array;
};

const infixOrder = (tree, array) => {
    const [root, left, right] = tree;

    if (root) {
        if (left) infixOrder(left, array);

        array.push(root);

        if (right) infixOrder(right, array);
    }

    return array;
};

const prefixOrder = (tree, array) => {
    const [root, left, right] = tree;

    if (root) {
        array.push(root);

        if (left) {
            prefixOrder(left, array);
        }
        if (right) {
            prefixOrder(right, array);
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

module.exports = printTree;