const fetch = require('node-fetch');

// async function beginFetching(url, abort) {

//     let results;
//     let response;

//     const controller = new AbortController();
//     const { signal } = controller;

//     console.log('Fetching...');
//     try {
//         if (!abort) {
//             response = await fetch(url, { signal }).then(response => response.json());
//             console.log('Fetch call completed successfully');
//         } else {
//             controller.abort();

//             response = await fetch(url, { signal }).then(response => response.json());
//             console.log('Aborting...');
//         }
//         results = response;
//     } catch (error) {
//         console.log(error);
//         if (error.name === "AbortError") {
//             results = "API failure (aborted)"
//         } else {
//             results = "Some other error";
//         }
//     } finally {
//         return results;
//     }
// };

// const beginFetching = (input, init) => {
//     console.log(input);
//     const controller = new AbortController();

//     const myFetch = fetch(input, { ...input, signal: controller.signal });

//     myFetch.cancel = () => controller.abort();

//     return myFetch;
// }

const beginFetching = (request, opts) => {
    const controller = new AbortController();
    const signal = controller.signal;
    let result = {};

    result = fetch(request, { ...opts, signal });

    result.abort = () => controller.abort();
    return result;
}

// (async function () {

//     const url = 'https://jsonplaceholder.typicode.com/todos/1';

//     const result = await beginFetching(url);
//     result.abort();
// })();

module.exports = beginFetching;