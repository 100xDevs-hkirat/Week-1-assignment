/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 */

function sleep (seconds) {
    return new Promise((resolve) => {
        setTimeout(resolve, seconds * 1000)
    })
}

sleep (2).then(() => {
    console.log("Program halted for 2 seconds")
})

