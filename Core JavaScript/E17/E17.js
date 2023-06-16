const isPalindrome = (linkedList) => {
    let temp = linkedList;
    let stack = [];

    if (linkedList == null)
        return true;

    while (temp != null) {
        stack.push(temp.value);
        temp = temp.next;
    }

    let temp2 = linkedList;
    let length = stack.length;

    while (temp2 != null) {
        let lastNum = stack.pop();

        if (temp2.value != lastNum) {
            return false;
        }

        if (length / 2 === stack.length) {
            return true;
        }

        temp2 = temp2.next;
    }
    return true;
}

module.exports = isPalindrome;