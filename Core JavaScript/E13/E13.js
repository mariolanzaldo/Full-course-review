const isSameLevel = (tree, n1, n2) => {
    const array = [];

    if (!tree) {
        return false;
    }

    // const arrayTree = convertToArray(tree);
    const { index, data: arrayTree } = convertToArray(tree, 0);
    console.log(arrayTree);

    if (index !== tree.length - 1) throwError();

    if (arrayTree?.length <= 1) {
        return false;
    }

    const stringArray = JSON.stringify(arrayTree);

    const sameLevel = traverseBF(arrayTree, array, n1, n2);

    if (!stringArray.includes(n1) || !stringArray.includes(n2)) {
        return false;
    }

    if (sameLevel.length === 2 && sameLevel[0] === sameLevel[1] && sameLevel[0] && sameLevel[1]) {
        return true
    } else if (sameLevel[0] !== sameLevel[1] || sameLevel.length < 2 || !sameLevel[0] || !sameLevel[1]) {
        return false;
    }
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
// const prefixTraversing = (tree, cb) => {
//     const recursiveTraversing = (tree, level) => {
//         const [value, ...children] = tree;
//         cb([value, level]);
//         for (let node of children) {
//             recursiveTraversing(node, level + 1);
//         }
//     };

//     recursiveTraversing(tree, 1);
// };

// const isSameLevel = (tree, n1, n2) => {
//     const levels = {};
//     let ans = false;
//     prefixTraversing(tree, ([value, level]) => {
//         //  If this is the first time at the level, create the set
//         if (!levels[level]) {
//             levels[level] = new Set();
//         }

//         // Check if the node value is one of the numbers
//         if ([n1, n2].includes(value)) {
//             // If both numbers are equal, we just check if the set already had a number
//             if (n1 === n2 && levels[level].size === 1) ans = true;

//             levels[level].add(value);
//         }

//         // If the set has two numbers, it means is leveled
//         if (levels[level].size === 2) {
//             ans = true;
//         }
//     });

//     return ans;
// };

module.exports = isSameLevel;
