const runBatches = async (tasks, pool_size) => {
    if (pool_size === 0) throw new Error("No task ran. Select a positive pool size");

    let activeTasks = [];
    const results = [];

    for (const [index, task] of tasks.entries()) {
        let activeTask;
        if (activeTasks.length >= pool_size) {
            await Promise.race(activeTasks);
        }

        try {
            activeTask = await task();
            activeTasks.splice(activeTasks.indexOf(activeTask), 1);
            results[index] = `{value: ${activeTask}}`;


        } catch (error) {
            activeTasks.splice(activeTasks.indexOf(activeTask), 1);
            results[index] = `{error: ${error}}`;
        }

        activeTasks.push(activeTask)

    }

    return results;
}


// (async function () {
//     const taskFactorySample = (delay, resolve, val) => {
//         return () => {
//             return new Promise((res, rej) =>
//                 setTimeout((value) => {
//                     // fn();
//                     console.log('called');
//                     return resolve ? res(value) : rej(value)
//                 }, delay, val))
//         }
//     };

//     const pool_size = 2;

//     const tasks = [
//         taskFactorySample(500, true, 1),
//         taskFactorySample(1000, true, 2),
//         taskFactorySample(5000, false, 'error'),
//         taskFactorySample(2000, true, 4),
//         taskFactorySample(1000, false, 'error'),
//         taskFactorySample(1000, false, 'error')
//     ];
//     const result = await runBatches(tasks, pool_size);
//     console.log(result)
// })()

module.exports = runBatches;