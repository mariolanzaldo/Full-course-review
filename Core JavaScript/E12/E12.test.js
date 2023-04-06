const printTree = require("./E12");

test.skip("Symmetric", () => {
    const bTree = "(1,(2,(3),(4,(5))),(2,(3),(4,(5))))";
    const arr = [];

    const isSymmetric = printTree(bTree, arr);

    expect(isSymmetric).toBe(true);
});

//TODO: Uncomment these lines!

// test("Not symmetric", () => {
//     const bTree = "(A,(B,(D),(E)),(C,(F,(H),(I)),(G,,(J))))";
//     const arr = [];

//     const isSymmetric = printTree(bTree, arr);
//     console.log(isSymmetric)

//     expect(isSymmetric).toBe(false);
// });