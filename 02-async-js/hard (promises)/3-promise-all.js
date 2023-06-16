/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Print how long it took for all 3 promises to resolve.
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
    Promise.all([waitOneSecond(), waitTwoSecond(), waitThreeSecond()]).then((values) => {
        console.log("values:", values)
        const endTime = new Date().getTime()
        console.log(`Took ${(endTime-startTime)/1000} seconds to resolve all promises`)
    })
}

calculateTime()