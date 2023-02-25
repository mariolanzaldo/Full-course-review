const detectCycle = (cycle) => {
    let set = new Set();

    let current = cycle;

    while (current) {
        if (set.has(current)) {

            return true;
        } else {
            set.add(current);
        }

        current = current.next;
    }

    return false;
}

module.exports = detectCycle;