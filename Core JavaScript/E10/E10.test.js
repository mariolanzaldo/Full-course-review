const printTree = require("./E10");

test("Infix", () => {
    const bTree = "(A,(B,(D),(E)),(C,(F,(H),(I)),(G,,(J))))";
    const arr = [];

    const output = printTree(bTree, "infix", arr);

    expect(output).toStrictEqual(["D", "B", "E", "A", "H", "F", "I", "C", "G", "J"]);
});

test("Prefix", () => {
    const bTree = "(A,(B,(D),(E)),(C,(F,(H),(I)),(G,,(J))))";
    const arr = [];

    const output = printTree(bTree, "prefix", arr);

    expect(output).toStrictEqual(["A", "B", "D", "E", "C", "F", "H", "I", "G", "J"]);
});

test("Postfix", () => {
    const bTree = "(A,(B,(D),(E)),(C,(F,(H),(I)),(G,,(J))))";
    const arr = [];

    const output = printTree(bTree, "postfix", arr);

    expect(output).toStrictEqual(["D", "E", "B", "H", "I", "F", "J", "G", "C", "A"]);
});

test("Default", () => {
    const bTree = "(A,(B,(D),(E)),(C,(F,(H),(I)),(G,,(J))))";
    const arr = [];

    const output = printTree(bTree, null, arr);

    expect(output).toStrictEqual(["D", "B", "E", "A", "H", "F", "I", "C", "G", "J"]);
});