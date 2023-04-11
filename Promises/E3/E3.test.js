const beginFetching = require('./E3');
const fetch = require('node-fetch');

const url = 'https://jsonplaceholder.typicode.com/todos/1';

test.skip('Fetching works', async () => {
    const result = await beginFetching(url);

    expect(result).toBeTruthy();
});

test.skip('Fetching aborted', async () => {
    const result = beginFetching(url, true);
    await result.abort();


    result.catch((error) => {
        expect(error).toHaveProperty("name", "AbortError")
    });
});