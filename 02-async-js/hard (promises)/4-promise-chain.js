/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Print out the time it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
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
    return waitOneSecond()
        .then(() => waitTwoSecond())
        .then(() => waitThreeSecond())
        .then(() => {
            const endTime = Date.now()
            const elapsedTime = endTime - startTime;
            console.log(`The Total Time it conatins ${elapsedTime} millsec in calculate time`)
        })
}

function calculateTimePromise() {
    const startTime = Date.now()
    Promise.all([waitOneSecond(), waitTwoSecond(), waitThreeSecond()])
        .then(() => {
            const endTime = Date.now()
            const elapsedTime = endTime - startTime;
            console.log(`The Total Time it conatins ${elapsedTime} millsec in PromiseAll`)
        })
}
calculateTime()
calculateTimePromise()