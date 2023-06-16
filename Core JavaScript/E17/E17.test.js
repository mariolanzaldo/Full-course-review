const { createLinkedList } = require('../E16/createList');
const isPalindrome = require('./E17');

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
};

head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(2);
head.next.next.next = new Node(1);

test("It is a palindrome and the function has no destructive behaviour", () => {
    const isPalin = isPalindrome(head);

    expect(isPalin).toBeTruthy();
    expect(isPalin).toBeTruthy();
})
test("Not a palindrome", () => {
    head.next.next.next.next = new Node(2);

    const isPalin = isPalindrome(head);
    expect(isPalin).toBeFalsy();
});
