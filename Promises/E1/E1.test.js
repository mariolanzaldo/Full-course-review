const runBatches = require("./E1");
// const FakeTimers = require("@sinonjs/fake-timers");

// const fakeClock = FakeTimers.install();

afterEach(() => {
    jest.clearAllMocks();
});

jest.setTimeout(30000);
// const fn = jest.fn();
const taskFactorySample = (delay, resolve, val) => {
    return () => {
        return new Promise((res, rej) =>
            setTimeout((value) => {
                // fn();
                return resolve ? res(value) : rej(value)
            }, delay, val))
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

    // await fakeClock.tickAsync(500);
    // expect(fn).toHaveBeenCalledTimes(1);

    // await fakeClock.tickAsync(500);
    // expect(fn).toHaveBeenCalledTimes(2);

    // await fakeClock.tickAsync(2000);
    // expect(fn).toHaveBeenCalledTimes(3);

    // await fakeClock.tickAsync(1000);
    // expect(fn).toHaveBeenCalledTimes(4);

    // await fakeClock.tickAsync(1000);
    // expect(fn).toHaveBeenCalledTimes(5);

    // await fakeClock.tickAsync(499);
    // expect(fn).toHaveBeenCalledTimes(5);

    // await fakeClock.tickAsync(1);
    // expect(fn).toHaveBeenCalledTimes(6);

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
    console.log(results);

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