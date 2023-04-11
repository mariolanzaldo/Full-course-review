const fetch = require('node-fetch');

async function beginFetching(url, abort) {

    let results;
    let response;

    const controller = new AbortController();
    const { signal } = controller;

    console.log('Fetching...');
    try {
        if (!abort) {
            response = await fetch(url, { signal }).then(response => response.json());
            console.log('Fetch call completed successfully');
        } else {
            controller.abort();

            response = await fetch(url, { signal }).then(response => response.json());
            console.log('Aborting...');
        }
        results = response;
    } catch (error) {
        console.log(error);
        if (error.name === "AbortError") {
            results = "API failure (aborted)"
        } else {
            results = "Some other error";
        }
    } finally {
        return results;
    }
};

module.exports = beginFetching;