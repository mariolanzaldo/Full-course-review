class Node {
    constructor(value) {
        this.left = null;
        this.right = null;
        this.value = value;
    }
}

const printTree = (tree, order) => {
    let array = [];

    const arrayTree = convertToArray(tree);

    switch (order) {
        case "prefix":
            array = prefixOrder(arrayTree);
            break;
        case "infix":
            array = infixOrder(arrayTree, array);
            break;
        case "postfix":
            array = postfixOrder(arrayTree);
            break;
        default:
            array = infixOrder(arrayTree);
    }
    return array;
};

const postfixOrder = (node) => {
    if (!node) {
        return [];
    }

    const array = [];

    array.push(...postfixOrder(node.left));
    array.push(...postfixOrder(node.right));
    array.push(node.value);

    return array;
};

const infixOrder = (node) => {
    if (node === null) {
        return [];
    }
    const array = [];

    array.push(...infixOrder(node.left));
    array.push(node.value);
    array.push(...infixOrder(node.right));

    return array;
};

const prefixOrder = (node) => {
    if (node === null) {
        return [];
    }
    const array = [];

    array.push(node.value);
    array.push(...prefixOrder(node.left));
    array.push(...prefixOrder(node.right));
    return array;
};

const convertToArray = (tree) => {
    if (tree === "" || !/[A-Za-z0-9 -]/.test(tree)) throwError();

    let index = -1;

    const getValue = () => {
        let value = "";
        while (tree[index] !== ")" && tree[index] !== ",") {
            if (tree[index] === "(" || !tree[index]) {
                throwError();
            }

            value += tree[index];
            index++;
        }

        return value;
    }


    const createNode = () => {
        index++;
        let root;

        if (tree[index] === ")" || tree[index] === ",") {
            return null;
        } else if (tree[index] === "(") {
            index++;
            root = new Node(getValue());
        } else {
            throwError();
        }

        if (tree[index] === ")") {
            index++;
            return root;
        }

        root.left = createNode();

        if (tree[index] !== ",") {
            throwError();
        } else if (tree[index] === ")") {
            index++;
            return root;
        }


        root.right = createNode();
        if (tree[index] !== ")") {
            throwError();
        }

        index++;

        return root;
    };

    const bTree = createNode();
    if (tree[index]) {
        throwError();
    }

    return bTree;
};


const throwError = () => {
    throw new Error("Syntax Error");
};

module.exports = printTree;