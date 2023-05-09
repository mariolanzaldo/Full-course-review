
function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
}

async function queryRetry(request, maxRetry, delayTime, useIncrement) {
    let result;

    for (let i = 0; i < maxRetry; i++) {

        try {
            result = await request();
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