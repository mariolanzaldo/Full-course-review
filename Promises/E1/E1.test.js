const runBatches = require("./E1");
const FakeTimers = require("@sinonjs/fake-timers");
const clock = FakeTimers.install();

afterEach(() => {
    jest.clearAllMocks();
    // jest.useRealTimers();
});

jest.setTimeout(15000);
const fn = jest.fn();
const taskFactorySample = (delay, resolve, val) => {
    return () => {
        return new Promise((res, rej) =>
            setTimeout((value) => {
                fn();
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

test.skip("Testing time", async () => {
    const pool_size = 2;

    const resultPromise = runBatches(tasks, pool_size);

    await clock.tickAsync(500);
    expect(fn).toHaveBeenCalledTimes(1);

    await clock.tickAsync(500);
    expect(fn).toHaveBeenCalledTimes(2);

    await clock.tickAsync(2000);
    expect(fn).toHaveBeenCalledTimes(3);

    await clock.tickAsync(1000);
    expect(fn).toHaveBeenCalledTimes(4);

    await clock.tickAsync(1000);
    expect(fn).toHaveBeenCalledTimes(5);

    await clock.tickAsync(500);
    expect(fn).toHaveBeenCalledTimes(6);

    const result = await resultPromise;

    expect(result).toStrictEqual([
        { value: 1 },
        { value: 2 },
        { error: 'error' },
        { value: 4 },
        { error: 'error' },
        { error: 'error' }
    ]);
});

test.skip('Pool larger than number of tasks', async () => {
    const pool_size = 200;
    const resultPromise = runBatches(tasks, pool_size);

    await clock.tickAsync(5500);
    expect(fn).toHaveBeenCalledTimes(6);

    const result = await resultPromise;

    return expect(result).toEqual([
        { value: 1 },
        { value: 2 },
        { error: 'error' },
        { value: 4 },
        { error: 'error' },
        { error: 'error' }
    ])
});

test.skip('Pool of size 0', async () => {
    const pool_size = 0;
    return expect(runBatches(tasks, pool_size)).rejects.toThrow("No task ran. Select a positive pool size");
});

test('Empty tasks', async () => {
    const pool_size = 2;
    const emptyTasks = [];
    const result = await runBatches(emptyTasks, pool_size);

    return expect(result.length).toEqual(0);
});