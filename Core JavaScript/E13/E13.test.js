const isSameLevel = require("./E13");

test.skip("At the same level", () => {
    // const bTree = "(1,(2,(3),(4,(5))),(2,(3),(4,(5))))";
    const bTree = "(1,(2,(3),(4,(5))),(6,(7),(8,(9))))";
    const arr = [];

    const sameLevel = isSameLevel(bTree, arr, "9", "5");

    expect(sameLevel).toBe("Numbers found at the same level")
});

//TODO: Uncomment these lines
// test("Not at the same level", () => {
//     const bTree = "(1,(2,(3),(4,(5))),(6,(7),(8,(9))))";
//     const arr = [];

//     const sameLevel = isSameLevel(bTree, arr, "9", "6");

//     expect(sameLevel).toBe("Numbers not found at the same level");
// });

// test("Any number not in the array", () => {
//     const bTree = "(1,(2,(3),(4,(5))),(2,(3),(4,(5))))";
//     const arr = [];

//     const sameLevel = isSameLevel(bTree, arr, "9", "5");
//     expect(sameLevel).toBe("Not in tree");
// });