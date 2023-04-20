const detectCycle = require('./E16');
const { createLinkedList } = require('./createList');

test.skip('Basic test', () => {
    const linkedList = createLinkedList([1, 2, 2, 3, 3, 6, 7, 2, 1], 3);

    const isCycle = detectCycle(linkedList);

    expect(isCycle).toBe(true);
});

test.skip('Loop at the beginning', () => {
    const linkedList = createLinkedList([1, 2, 2, 3, 3, 6, 7, 2, 1], 1);
    const isCycle = detectCycle(linkedList);

    expect(isCycle).toBe(true);
});

test.skip('No loop', () => {
    const linkedList = createLinkedList([1, 2, 2, 3, 3, 6, 7, 2, 1]);

    const isCycle = detectCycle(linkedList);

    expect(isCycle).toBe(false);
});