const printTree = require("./E10");

test("Infix", () => {
    const bTree = "(A,(B,(D),(E)),(C,(F,(H),(I)),(G,,(J))))";

    const output = printTree(bTree, "infix");

    expect(output).toStrictEqual(["D", "B", "E", "A", "H", "F", "I", "C", "G", "J"]);
});

test("Prefix", () => {
    const bTree = "(A,(B,(D),(E)),(C,(F,(H),(I)),(G,,(J))))";

    const output = printTree(bTree, "prefix");

    expect(output).toStrictEqual(["A", "B", "D", "E", "C", "F", "H", "I", "G", "J"]);
});

test("Postfix", () => {
    const bTree = "(A,(B,(D),(E)),(C,(F,(H),(I)),(G,,(J))))";

    const output = printTree(bTree, "postfix");

    expect(output).toStrictEqual(["D", "E", "B", "H", "I", "F", "J", "G", "C", "A"]);
});

test("Default", () => {
    const bTree = "(A,(B,(D),(E)),(C,(F,(H),(I)),(G,,(J))))";

    const output = printTree(bTree, null);

    expect(output).toStrictEqual(["D", "B", "E", "A", "H", "F", "I", "C", "G", "J"]);
});

test("Invalid inputs", () => {
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
    expect(() => printTree("(A,,(B),,)", "infix")).toThrow(Error);
    expect(() => printTree("(,)", "infix")).toThrow(Error);
    expect(() => printTree("(A,(B)),()", "infix")).toThrow(Error);
});

test("Alternative inputs", () => {
    const aTree = "(A,)"
    const bTree = "(AB,(B,(D),(E)),(C,(F,(H),(I)),(G,,(J))))";
    const cTree = "(A,,)";

    const output1 = printTree(bTree, "infix");
    const output2 = printTree(cTree, "infix");
    const output3 = printTree(aTree, "infix");



    expect(output1).toStrictEqual(["D", "B", "E", "AB", "H", "F", "I", "C", "G", "J"]);
    expect(output2).toStrictEqual(["A"]);
    expect(output3).toStrictEqual(["A"]);
});