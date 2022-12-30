const runBatches = require("./E1");
// // const batchTasks = require('./E1');
jest.setTimeout(11000);
const taskFactorySample = (delay, resolve, val) => {
    return () => {
        return new Promise((res, rej) => setTimeout(resolve ? res : rej, delay, val))
    }
};
const tasks = [
    taskFactorySample(500, true, 1),
    taskFactorySample(1000, true, 2),
    taskFactorySample(5000, false, 'error'),
    taskFactorySample(2000, true, 4),
    taskFactorySample(1000, false, 'error'),
    taskFactorySample(1000, false, 'error')
];

test('Test', async () => {
    const pool_size = 2;

    const result = await runBatches(tasks, pool_size);
    return expect(result).toEqual([
        { status: "fulfilled", value: 1 },
        { status: "fulfilled", value: 2 },
        { status: "rejected", reason: 'error' },
        { status: "fulfilled", value: 4 },
        { status: "rejected", reason: 'error' },
        { status: "rejected", reason: 'error' },
    ]);
});
//TODO: Uncomment these lines!
// test('Pool larger than number of tasks', async () => {
//     const pool_size = 200;
//     const results = await runBatches(tasks, pool_size);

//     return expect(results).toEqual([
//         { status: "fulfilled", value: 1 },
//         { status: "fulfilled", value: 2 },
//         { status: "rejected", reason: 'error' },
//         { status: "fulfilled", value: 4 },
//         { status: "rejected", reason: 'error' },
//         { status: "rejected", reason: 'error' },
//     ])
// });

// test('Pool of size 0', async () => {
//     const pool_size = 0;
//     return expect(runBatches(tasks, pool_size)).rejects.toThrow("No task ran. Select a positive pool size");
// });