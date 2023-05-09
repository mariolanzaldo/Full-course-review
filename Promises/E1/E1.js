const runBatches = async (tasks, pool_size) => {

    if (pool_size === 0) throw new Error("No task ran. Select a positive pool size");

    let queue = [...tasks];
    let activeTasks = {};
    let results = [];

    while (queue.length) {

        if (Object.keys(activeTasks).length < pool_size) {

            const task = queue.shift();
            const index = tasks.length - queue.length - 1;

            const modifiedTask = task().then((value) => [index, { value }]).catch((error) => [index, { error }]);
            activeTasks[index] = modifiedTask;
        } else {
            const [index, value] = await Promise.race(Object.values(activeTasks));

            delete activeTasks[index];

            results[index] = value;
        }
    }

    const remainingTasks = await Promise.allSettled(Object.values(activeTasks));

    remainingTasks.forEach((element) => {
        results[element.value[0]] = element.value[1];
    });

    return results;

};

module.exports = runBatches;