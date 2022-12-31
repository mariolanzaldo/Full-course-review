async function runBatches(tasks, pool_size = 2) {
    let completedTasks = [];

    if (tasks.length < pool_size) {
        for await (const batch of getBatches(tasks, tasks.length)) {
            completedTasks.push(...batch);
        }

        return completedTasks;
    } else if (pool_size === 0) {
        throw new Error("No task ran. Select a positive pool size");
    }

    for await (const batch of getBatches(tasks, pool_size)) {
        completedTasks.push(...batch);
    }

    return completedTasks;
};

async function* getBatches(tasks, pool_size, taskCallback = (r) => r) {
    for (let i = 0; i < tasks.length; i = i + pool_size) {
        const batch = tasks.slice(i, i + pool_size);

        const result = await Promise.allSettled(
            batch.map((task) => task().then((r) => taskCallback(r)))
        );
        yield result;
    }
}

module.exports = runBatches;

