const isSameLevel = require("./E13");

test("At the same level", () => {
    const bTree = "(1,(2,(3),(4,(5))),(6,(7),(8,(9))))";

    const sameLevel = isSameLevel(bTree, "9", "5");

    expect(sameLevel).toBeTruthy()
});

test("Failed at simple cases", () => {
    const bTree = "(1,(3))";
    const bTree2 = "(1)";
    const bTree3 = "(1,(2),(3))";
    const bTree4 = "(12,(5),(7))";
    const bTree5 = "((12,(5),(7),(7),(3)), 1, 2)";

    const test1 = isSameLevel(bTree, "1", "3");

    const test2 = isSameLevel(bTree2, "1", "1");

    const test3 = isSameLevel(bTree3, "3", "3");

    let test4 = isSameLevel(bTree4, "1", "2");

    expect(test1).toBeFalsy();
    expect(test2).toBeFalsy();
    expect(test3).toBeFalsy();
    expect(test4).toBeFalsy();
    expect(() => isSameLevel(bTree5, "1", "2")).toThrow(Error);
});

test("Not at the same level", () => {
    const bTree = "(1,(2,(3),(4,(5))),(6,(7),(8,(9))))";

    const sameLevel = isSameLevel(bTree, "9", "6");

    expect(sameLevel).toBeFalsy();
});

test("Any number not in the array", () => {
    const bTree = "(1,(2,(3),(4,(5))),(2,(3),(4,(5))))";

    const sameLevel = isSameLevel(bTree, "9", "5");
    expect(sameLevel).toBeFalsy();
});