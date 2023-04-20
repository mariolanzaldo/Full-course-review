const printTree = require("./E10");

test.skip("Infix", () => {
    const bTree = "(A,(B,(D),(E)),(C,(F,(H),(I)),(G,,(J))))";
    // const arr = [];

    const output = printTree(bTree, "infix");

    expect(output).toStrictEqual(["D", "B", "E", "A", "H", "F", "I", "C", "G", "J"]);
});

test.skip("Prefix", () => {
    const bTree = "(A,(B,(D),(E)),(C,(F,(H),(I)),(G,,(J))))";

    const output = printTree(bTree, "prefix");

    expect(output).toStrictEqual(["A", "B", "D", "E", "C", "F", "H", "I", "G", "J"]);
});

test.skip("Postfix", () => {
    const bTree = "(A,(B,(D),(E)),(C,(F,(H),(I)),(G,,(J))))";

    const output = printTree(bTree, "postfix");

    expect(output).toStrictEqual(["D", "E", "B", "H", "I", "F", "J", "G", "C", "A"]);
});

test.skip("Default", () => {
    const bTree = "(A,(B,(D),(E)),(C,(F,(H),(I)),(G,,(J))))";

    const output = printTree(bTree, null);

    expect(output).toStrictEqual(["D", "B", "E", "A", "H", "F", "I", "C", "G", "J"]);
});

test.skip("Invalid inputs", () => {
    expect(() => printTree("(A", "infix")).toThrow(Error);
    expect(() => printTree("A)", "infix")).toThrow(Error);
    expect(() => printTree("(,A,,)", "infix")).toThrow(Error);
    expect(() => printTree("(A))", "infix")).toThrow(Error);
    expect(() => printTree("((A)", "infix")).toThrow(Error);
    expect(() => printTree("(())", "infix")).toThrow(Error);
    expect(() => printTree("(A),()", "infix")).toThrow(Error);
    expect(() => printTree("(A,B)", "infix")).toThrow(Error);
    expect(() => printTree("(A,B,C)", "infix")).toThrow(Error);
    expect(() => printTree("(A,,,(C))", "infix")).toThrow(Error);
    expect(() => printTree("A", "infix")).toThrow(Error);
});

test.skip("Alternative inputs", () => {
    const bTree = "(AB,(B,(D),(E)),(C,(F,(H),(I)),(G,,(J))))";
    const output = printTree(bTree, "infix");

    expect(output).toStrictEqual(["D", "B", "E", "AB", "H", "F", "I", "C", "G", "J"]);
});