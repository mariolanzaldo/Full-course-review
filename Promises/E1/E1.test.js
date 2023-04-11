const runBatches = require("./E1");
// const batchTasks = require('./E1');
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

test.skip('Test', async () => {
    const pool_size = 2;

    const result = await runBatches(tasks, pool_size);

    return expect(result).toEqual([
        '{value: 1}',
        '{value: 2}',
        '{error: error}',
        '{value: 4}',
        '{error: error}',
        '{error: error}'
    ]);
});

test.skip('Pool larger than number of tasks', async () => {
    const pool_size = 200;
    const results = await runBatches(tasks, pool_size);

    return expect(results).toEqual([
        '{value: 1}',
        '{value: 2}',
        '{error: error}',
        '{value: 4}',
        '{error: error}',
        '{error: error}'
    ])
});

test.skip('Pool of size 0', async () => {
    const pool_size = 0;
    return expect(runBatches(tasks, pool_size)).rejects.toThrow("No task ran. Select a positive pool size");
});

test.skip('Empty tasks', async () => {
    const pool_size = 2;
    const emptyTasks = [];
    const result = await runBatches(emptyTasks, pool_size);

    return expect(result.length).toEqual(0);
});