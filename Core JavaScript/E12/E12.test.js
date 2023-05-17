const isSymmetric = require("./E12");

test.skip("Symmetric", () => {
    const bTree = "(1,(2, (3), (4)),(2,(4),(3)))";



    const output = isSymmetric(bTree);

    expect(output).toBe(true);
});

test.skip("Another case", () => {
    const bTree = "(A,(B),(B))";

    const output = isSymmetric(bTree);

    expect(output).toBe(true);
})

test.skip("Not symmetric", () => {
    const bTree = "(A,(B,(D),(E)),(C,(F,(H),(I)),(G,,(J))))";

    const output = isSymmetric(bTree);

    expect(output).toBe(false);
});

test.skip("Other examples", () => {
    const aTree = "(A,(B,,(X)),(B,(X)))";
    const bTree = "(A,(B))";

    const isSymmetricTree1 = isSymmetric(bTree);

    const isSymmetricTree2 = isSymmetric(aTree);

    expect(isSymmetricTree1).toBe(false);

    expect(isSymmetricTree2).toBe(true);
});