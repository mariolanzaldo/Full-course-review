const printTree = (tree, order) => {
    let array = [];

    const isValidTree = checkSyntax(tree);

    if (!isValidTree) throw new Error('Syntax Error');

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
    let isOpen = true;

    for (let i = 0; i < tree.length; i++) {
        if ((tree[i] === ")" || tree[i] === ",") && isOpen) {
            temp += `"`;
            isOpen = false;
        }

        if (tree[i] === ',') {
            temp += ',';
        } else if (tree[i] === '(') {
            temp += '["';
            isOpen = true;
        } else if (tree[i] === ')') {
            temp += ']';
            isOpen = false;

        } else {
            temp += tree[i];
        }
    };

    const arrayTree = eval(temp);

    return arrayTree;
};

const checkSyntax = (tree) => {
    if (tree.length < 1) return true;

    if (tree.length === 1) return false;

    if (tree[0] !== '(' || tree[tree.length - 1] !== ')') return false;

    let parenthesisRemoved = tree.slice(1, -1);

    let internalElements = parenthesisRemoved.split(',');

    if (internalElements[internalElements.length - 1].includes('(') && !internalElements[internalElements.length - 1].includes(')')) {
        return false;
    }

    if (!internalElements[0]) {
        internalElements = internalElements.filter(p => p);

        if (internalElements.length >= 1 || internalElements.length === 0) return false;
    }

    if (internalElements.length > 1 && !internalElements[1] && (internalElements[2] && (!parenthesisRemoved.includes('(') || (!parenthesisRemoved.includes(')'))))) {

        return false;
    } else if (internalElements.length > 2 && (!internalElements[1] && !internalElements[2]) && internalElements[3]) {
        return false;
    } else if (internalElements.length > 2 && (!internalElements[1] && internalElements[2])) {
        return false;
    }

    let root = parenthesisRemoved.split(',')[0];
    if (root.includes('(') || root.includes(')')) return false;

    return true;
};

module.exports = printTree;