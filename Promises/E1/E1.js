// async function runBatches(tasks, pool_size) {

//     if (tasks.length === 0) {
//         return [];
//     } else if (pool_size > tasks.length || pool_size < 1) {
//         pool_size = tasks.length;
//     }
//     let initTasks = [...tasks]

//     let results = await getBatches(initTasks, pool_size);
//     // console.log(results);
//     return results;
// }

// async function getBatches(tasks, pool_size) {
//     const response = [];
//     let pendingTasks = tasks.length;
//     let outsideResolve;

//     tasks = tasks.map((fn, position) => ({ fn, position }));

//     async function newTask(result, position) {
//         pendingTasks--;

//         if (result !== 'error') {
//             response[position] = { value: result };

//         } else {
//             response[position] = { error: 'error' };
//         }
//         let task = tasks.shift();

//         if (pendingTasks === 0) {
//             console.log('finished');
//             outsideResolve();
//         }
//         if (task) {
//             task.fn()
//                 .then((v) => newTask(v, task.position))
//                 .catch((v) => newTask(v, task.position))
//         }
//     }

//     for (let i = 0; i < pool_size; i++) {
//         let task = tasks.shift();
//         task.fn()
//             .then((v) => newTask(v, task.position))
//             .catch((v) => newTask(v, task.position))
//     }

//     await new Promise((res) => outsideResolve = res);

//     return response;
// }


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

