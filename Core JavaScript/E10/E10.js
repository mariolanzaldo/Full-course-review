const printTree = (tree, order) => {
    let array = [];

    const { index, data: arrayTree } = convertToArray(tree, 0);

    if (index !== tree.length - 1) throwError();

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

const convertToArray = (tree, startIndex) => {
    if (tree[startIndex] === ",") {
        return { index: startIndex - 1, data: null };
    }
    if (tree[startIndex] === ")" && startIndex === tree.length - 1)
        return { index: startIndex - 1, data: null };
    if (tree[startIndex] !== "(") throwError();

    let i = startIndex + 1;

    for (; i < tree.length && tree[i] !== ","; i++) {
        if (tree[i] === ")") {
            const element = Array.from(tree.substring(startIndex + 1, i));

            return { index: i, data: element };
        } else if (tree[i] === "(") {
            throwError();
        }
    }

    if (i === tree.length - 1 && tree[i] !== ")") {
        throwError();
    }

    const root = tree.substring(startIndex + 1, i);

    if (!root) {
        throwError();
    }

    let { index, data: firstChildData } = convertToArray(tree, i + 1);

    if (tree[index + 1] === ")") {
        return { index: index + 1, data: [root, firstChildData] };
    }

    if (tree[index + 1] !== ",") {
        throwError();
    }

    const { index: secondChildIndex, data: seconChildData } = convertToArray(tree, index + 2);
    index = secondChildIndex;


    if (tree[index + 1] !== ")") throwError();


    return { index: index + 1, data: [root, firstChildData, seconChildData] };
};

const throwError = () => {
    throw new Error("Syntax Error");
};

module.exports = printTree;