class Node {
    constructor(value, children = []) {
        this.value = value;
        this.children = children;
    }

    addChild(node) {
        this.children.push(node);
    }
}

const isSameLevel = (root, n1, n2) => {
    if (root === null) {
        return false;
    }

    const queue = [{ node: root, depth: 0 }];
    const depths = new Map();

    while (queue.length > 0) {
        const { node, depth } = queue.shift();


        if ((node.value === n1 || node.value === n2) && depth !== 0) {
            if (depths.has(node.value)) {
                if (depth !== depths.get(node.value)) {
                    return false
                }
            } else {
                depths.set(node, depth);
            }
        }

        for (const child of node.children) {
            queue.push({ node: child, depth: depth + 1 });
        }
    }

    console.log(depths.size >= 2);
    console.log(depths.get(root));


    // return depths.size >= 2 && depths.get(root) !== 0;
    return depths.size >= 2; depths.get(n1) !== undefined && depths.get(n2) !== undefined;
}

module.exports = { isSameLevel, Node };
