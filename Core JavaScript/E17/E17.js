const isPalindrome = (root) => {
    if (!root || !root.next) {
        return true;
    }

    let slow = root;
    let fast = root;

    while (fast.next && fast.next.next) {
        slow = slow.next;
        fast = fast.next.next;
    };

    let half = reverseLinkedList(slow.next);
    let curr1 = root;
    let curr2 = half;

    while (curr2) {
        if (curr1.data !== curr2.data) {
            return false;
        }

        curr1 = curr1.next;
        curr2 = curr2.next;
    }

    slow.next = reverseLinkedList(half);

    return true;
};

const reverseLinkedList = (root) => {
    let prev = null;
    let curr = root;

    while (curr) {
        const { next: nextTemp } = curr;
        curr.next = prev;
        [prev, curr] = [curr, nextTemp];
    }

    return prev;
};

module.exports = isPalindrome;