/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 */

const callback = () => {
    console.log("Done")
}

const promiseBody = (resolve, n) => {
    setTimeout(resolve, n * 1000);
}

const jamFunc = (sec) => {
    return new Promise((resolve) => promiseBody(resolve, sec));
}

const sleep = async (seconds) => {
    console.log("Start")
    await jamFunc(seconds).then(callback)
    console.log("After Function")
}

sleep(5);