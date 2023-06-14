/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 */


function sleep(seconds) {
    const waitUntil = new Date().getTime() + seconds * 1000;

    while (new Date().getTime() < waitUntil) { }

}

sleep(13);

let sum = 0;
for (let i = 0; i < 100; i++) {
    sum += i
}
console.log(sum);
