/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 */

function sleep(seconds) {
    return new Promise(function (resolve, reject) {
        let d = Date.now()
        while (Date.now() - d < seconds * 1000) {

        }
        resolve()
    })
}

sleep(2)
console.log("Wake")