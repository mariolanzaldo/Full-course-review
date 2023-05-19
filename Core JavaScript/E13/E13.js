const isSameLevel = (tree, n1, n2) => {
    const array = [];

    if (!tree) {
        return 'Numbers not found at the same level';
    }

    const arrayTree = convertToArray(tree);

    if (arrayTree?.length <= 1) {
        return 'Numbers not found at the same level';
    }

    const stringArray = JSON.stringify(arrayTree);

    const sameLevel = traverseBF(arrayTree, array, n1, n2);

    if (!stringArray.includes(n1) || !stringArray.includes(n2)) {
        return 'Not in tree';
    }

    if (sameLevel.length === 2 && sameLevel[0] === sameLevel[1]) {
        return 'Numbers found at the same level';
    } else if (sameLevel[0] !== sameLevel[1] || sameLevel.length < 2) {
        return 'Numbers not found at the same level';
    }
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

const traverseBF = (arrayTree, array, n1, n2) => {
    const levels = {};
    let queue = [arrayTree];
    let level = 1;

    while (queue.length > 0) {
        let temp = [];
        let stack = [];

        while (queue.length > 0) {
            let current = queue.shift();
            const [value, ...children] = current;
            temp.push(value);

            for (const element of children) {
                stack.push(element);
            }
        }
        queue = stack;
        levels[level] = temp;
        level++;
    }


    Object.entries(levels).forEach(([key, level]) => {
        if (n1 !== n2) {
            array = level.map((element) => {
                if (element === n1 || element === n2) {
                    return key;
                }
            });
        } else if (n1 === n2) {
            const isInLevel = level.filter((el) => el === n1 || el === n2)

            if (isInLevel.length === 2) {
                array = [key, key];
            }
        }
    });

    return array;
}

module.exports = isSameLevel;
