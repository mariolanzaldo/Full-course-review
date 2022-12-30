
function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
}

async function queryRetry(request, maxRetry, delayTime, useIncrement, attempt = 0) {
    let result;

    // try {
    //     result = await request();
    //     return result;
    // } catch (error) {
    //     if (useIncrement) {
    //         delayTime += delayTime;
    //     }
    //     if (maxRetry > 0) {
    //         maxRetry--;
    //         attempt++;
    //         // console.log(attempt)
    //         console.log(delayTime);


    //         await delay(delayTime);

    //         await queryRetry(request, maxRetry, delayTime, useIncrement, attempt);
    //     }
    // }
    // throw { Error: `Query rejected ${attempt} times!` };

    while (maxRetry > 0) {
        try {
            result = await request();
            return result;
        } catch (err) {
            if (useIncrement) {
                delayTime += delayTime;
            }

            await delay(delayTime);
            maxRetry--;
            attempt++;
        }
    }
    throw { Error: `Query rejected ${attempt} times!` };
};

module.exports = queryRetry;