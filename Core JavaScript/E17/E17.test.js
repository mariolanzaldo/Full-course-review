const { createLinkedList } = require('../E16/createList');
const isPalindrome = require('./E17');


test("Basic test", () => {
    // const array = [1, 2, 2, 3, 3, 2, 2, 1];
    const array = [1, 6, 4, 5, 4, 6, 1];
    const linkedList = createLinkedList(array);

    const isPalin = isPalindrome(linkedList);
    expect(isPalin).toBe(true);
});

test("Short palindrome", () => {
    const array = [1, 2, 2, 1];

    const linkedList = createLinkedList(array);
    const isPalin = isPalindrome(linkedList);

    expect(isPalin).toBe(true);

});

test("Not a palindrome", () => {
    const array = [1, 2, 3, 1];

    const linkedList = createLinkedList(array);
    const isPalin = isPalindrome(linkedList);

    expect(isPalin).toBe(false);
});