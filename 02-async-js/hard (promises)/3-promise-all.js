/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Print how long it took for all 3 promises to resolve.
 */


function waitOneSecond() {
    return new Promise(res => {
        setTimeout(res, 1 * 1000)
    })
}

function waitTwoSecond() {
    return new Promise(res => {
        setTimeout(res, 2 * 1000)
    })
}

function waitThreeSecond() {
    return new Promise(res => {
        setTimeout(res, 3 * 1000)
    })
}

function calculateTime() {
    const startTime = Date.now()

    Promise.all([waitOneSecond(), waitTwoSecond(), waitThreeSecond()])
        .then(() => {
            const elapsedTime = Date.now() - startTime;
            console.log(`The time taken is ${elapsedTime} millisec`)
        }).catch(err => console.log(`Some Error Occured ${err}`))
}

calculateTime(10)
// waitOneSecond().then(() => console.log('one sec executed'))
// waitTwoSecond().then(() => console.log('two sec executed'))
// waitThreeSecond().then(() => console.log('three sec executed'))