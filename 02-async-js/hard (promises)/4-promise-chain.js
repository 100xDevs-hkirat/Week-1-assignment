/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Print out the time it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */

function waitOneSecond() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {resolve("Resolved after 1 second")}, 1000)
    })
}

function waitTwoSecond() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {resolve("Resolved after 2 seconds")}, 2000)
    })
}

function waitThreeSecond() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {resolve("Resolved after 3 seconds")}, 3000)
    })
}


function calculateTime() {
    const startTime = new Date().getTime()
    waitOneSecond().then((ret) => {
        console.log(ret)
        waitTwoSecond().then((ret) => {
            console.log(ret)
            waitThreeSecond().then((ret) => {
                console.log(ret)
                const endTime = new Date().getTime()
                console.log(`Took ${(endTime-startTime)/1000} seconds to resolve all promises`)
            })
        })
    })
}

calculateTime()