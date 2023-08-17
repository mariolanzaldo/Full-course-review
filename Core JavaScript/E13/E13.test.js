const { isSameLevel, Node } = require("./E13");

test("At same level", () => {
    const root = new Node(1);
    const node2 = new Node(2);
    const node3 = new Node(3);
    const node4 = new Node(4);
    const node5 = new Node(5);
    const node6 = new Node(6);

    root.addChild(node2);
    root.addChild(node3);
    node2.addChild(node4);
    node3.addChild(node5);
    node3.addChild(node6);



    const sameLevel = isSameLevel(root, 4, 6);
    expect(sameLevel).toBeTruthy();
});

test("Failed at missing numbers", () => {
    const root = new Node(1);
    const node2 = new Node(2);
    const node3 = new Node(3);
    const node4 = new Node(4);
    const node5 = new Node(5);
    const node6 = new Node(6);

    root.addChild(node2);
    root.addChild(node3);
    node2.addChild(node4);
    node3.addChild(node5);
    node3.addChild(node6);



    const sameLevel = isSameLevel(root, 4, 8);
    expect(sameLevel).toBeFalsy();
});

test("Should fail only one three", () => {
    const root = new Node(1);
    const node2 = new Node(2);
    const node3 = new Node(3);

    root.addChild(node2);
    root.addChild(node3);

    const sameLevel = isSameLevel(root, 3, 3);
    expect(sameLevel).toBeFalsy();
});

test("Should pass", () => {
    const root = new Node(1);
    const node2 = new Node(2);
    const node3 = new Node(3);
    const node4 = new Node(4);
    const node5 = new Node(5);
    const node6 = new Node(4);
    const node7 = new Node(6);


    root.addChild(node2);
    root.addChild(node3);
    node2.addChild(node4);
    node3.addChild(node5);
    node3.addChild(node6);
    node4.addChild(node7);

    const sameLevel = isSameLevel(root, 4, 4);
    expect(sameLevel).toBeTruthy();
});

test("Alternative inputs", () => {
    const tree1 = new Node(1, [new Node(1)]);

    let sameLevel = isSameLevel(tree1, 1, 1);
    console.log(sameLevel);

    expect(sameLevel).toBeFalsy();

    sameLevel = isSameLevel(tree1, 1, 7);

    expect(sameLevel).toBeFalsy();
});