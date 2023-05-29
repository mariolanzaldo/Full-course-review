const isSameLevel = require("./E13");

test("At the same level", () => {
    // const bTree = "(1,(2,(3),(4,(5))),(2,(3),(4,(5))))";
    const bTree = "(1,(2,(3),(4,(5))),(6,(7),(8,(9))))";

    const sameLevel = isSameLevel(bTree, "9", "5");

    expect(sameLevel).toBe("Numbers found at the same level")
});

test("Simple cases", () => {
    const bTree = "(1,(3))";
    const bTree2 = "(1)";
    const bTree3 = "(1,(2),(3))";

    const test1 = isSameLevel(bTree, "1", "3");

    const test2 = isSameLevel(bTree2, "1", "1");

    const test3 = isSameLevel(bTree3, "3", "3");

    expect(test1).toBe("Numbers not found at the same level");

    expect(test2).toBe("Numbers not found at the same level");

    expect(test3).toBe("Numbers not found at the same level");
});

test("Not at the same level", () => {
    const bTree = "(1,(2,(3),(4,(5))),(6,(7),(8,(9))))";

    const sameLevel = isSameLevel(bTree, "9", "6");

    expect(sameLevel).toBe("Numbers not found at the same level");
});

test("Any number not in the array", () => {
    const bTree = "(1,(2,(3),(4,(5))),(2,(3),(4,(5))))";

    const sameLevel = isSameLevel(bTree, "9", "5");
    expect(sameLevel).toBe("Not in tree");
});