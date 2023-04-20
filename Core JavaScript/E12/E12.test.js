const isSymmetric = require("./E12");

test.skip("Symmetric", () => {
    const bTree = "(1,(2,(3),(4,(5))),(2,(3),(4,(5))))";

    const output = isSymmetric(bTree);

    expect(output).toBe(true);
});

test.skip("Another case", () => {
    const bTree = "(A,(B,(X)),(B,(X)))";

    const output = isSymmetric(bTree);

    expect(output).toBe(true);
})

test.skip("Not symmetric", () => {
    const bTree = "(A,(B,(D),(E)),(C,(F,(H),(I)),(G,,(J))))";
    const arr = [];

    const isSymmetric = printTree(bTree, arr);
    console.log(isSymmetric)

    expect(isSymmetric).toBe(false);
});