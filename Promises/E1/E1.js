const runBatches = async (tasks, pool_size) => {

    if (pool_size === 0) throw new Error("No task ran. Select a positive pool size");

    const batch = Math.min(pool_size, tasks.length);
    const results = [];

    const tasksQueue = Array.from({ length: batch }, async () => {
        for (const [index, task] of tasks.entries()) {
            try {
                results[index] = `{value: ${await task()}}`;
            } catch (error) {
                results[index] = `{error: ${error}}`;
            }
        }
    });

    await Promise.all(tasksQueue);

    return results;
};

module.exports = runBatches;