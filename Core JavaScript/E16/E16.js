const detectCycle = (cycle) => {
    if (!cycle || !cycle.next || !cycle.next.next) {
        return null;
    }

    let slow = cycle;
    let fast = cycle;

    slow = slow.next;
    fast = fast.next.next;

    while (!!fast && !!fast.next) {
        if (slow == fast) break;

        slow = slow.next;
        fast = fast.next.next;
    }

    if (slow != fast) return null;

    slow = cycle;

    while (slow != fast) {
        slow = slow.next;
        fast = fast.next;
    }

    return cycle;
}

module.exports = detectCycle;