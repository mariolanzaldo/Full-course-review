const beginFetching = require('./E3');

const url = 'https://jsonplaceholder.typicode.com/todos/1';
const abort = false;

test('Fetching works', async () => {
    const result = await beginFetching(url, abort);

    expect(result).toBeTruthy();
});

//TODO: uncomment these lines!
// test('Fetching aborted', async () => {
//     const result = await beginFetching(url, true);

//     expect(result).toEqual("API failure (aborted)");
// });