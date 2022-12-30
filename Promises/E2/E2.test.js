const queryRetry = require("./E2");
jest.setTimeout(15000);


const urlQuery = url => () => fetch(url)

const maxRetry = 3;
const useIncrement = true;
const delay = 1000;

test('Success at first attempt', () => {
    expect.assertions(1);
    return expect(queryRetry(urlQuery('https://jsonplaceholder.typicode.com/todos/1'), maxRetry, delay, useIncrement))
        .resolves
        .toBeTruthy();
});

//TODO: uncomment these lines
// test('Fail at n attempts', () => {
//     return expect(queryRetry(urlQuery('https://jsonplaceholder.tpicode.com/todos/1'), maxRetry, delay, useIncrement))
//         .rejects.toEqual({
//             Error: 'Query rejected 3 times!',
//         })
// });

// test('Check delay increment', async () => {
//     let start = new Date().getTime();
//     let totalTime
//     try {
//         await queryRetry(urlQuery('https://jsonplaceholder.tpicode.com/todos/1'), maxRetry, delay, useIncrement);
//     } catch (e) {
//         totalTime = new Date().getTime() - start;
//     }
//     expect(totalTime).toBeGreaterThanOrEqual(2000);
//     expect(totalTime).toBeLessThan(14500);
//     return
// });

// test('Check delay without increment.', async () => {
//     let start = new Date().getTime();
//     let totalTime
//     try {
//         await queryRetry(urlQuery('https://jsonplaceholder.tpicode.com/todos/1'), maxRetry, delay, false);
//     } catch (error) {
//         totalTime = new Date().getTime() - start;
//     }
//     expect(totalTime).toBeGreaterThanOrEqual(2000);
//     expect(totalTime).toBeLessThan(3500);
//     return
// });