/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 */


function sleep(seconds) {
    console.log("I'm feeling sleepy!")
    const time1 = new Date().getTime();
    let time2 = new Date().getTime();
    while (time2 - time1 <= 2000) {
        time2 = new Date().getTime();
    }
}

sleep(2);p


console.log("Now I am awake!")