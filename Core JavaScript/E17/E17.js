const isPalindrome = (linkedList) => {
    let current = linkedList;

    let ispalindrome = true;

    let stack = [];

    while (current) {
        if (current.data) {
            stack.push(current.data);
        }
        current = current.next;
    }

    while (linkedList) {
        let i = stack.pop();

        if (linkedList.data == i) {
            ispalindrome = true;
        } else {
            ispalindrome = false;
            break;
        }

        linkedList = linkedList.next;
    }

    return ispalindrome;
};

module.exports = isPalindrome;