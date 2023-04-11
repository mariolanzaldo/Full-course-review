
function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
}

async function queryRetry(request, maxRetry, delayTime, useIncrement, attempt = 0) {
    let result;

    // while (maxRetry > 0) {
    //     try {
    //         result = await request();
    //         return result;
    //     } catch (err) {
    //         if (useIncrement) {
    //             delayTime += delayTime;
    //         }

    //         await delay(delayTime);
    //         maxRetry--;
    //         attempt++;
    //     }
    // }
    // throw { Error: `Query rejected ${attempt} times!` };


    for (let i = 0; i < maxRetry; i++) {

        try {
            result = await request();
            console.log(result);
            return result;
        } catch (err) {
            if (useIncrement) {
                delayTime += delayTime;
            }
            await delay(delayTime);
        }
    }
    throw new Error('Query retries exceeded');
};

module.exports = queryRetry;