/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 */

function sleep(seconds) {
    return new Promise((resolve) => {
        setTimeout(resolve, seconds * 1000)
    })
}
sleep(10).then(() => console.log('this thread rune'))

for (let i = 0; i <= 100; i++) {
    let count = 0;

    count += i;
    console.log(count)
}
