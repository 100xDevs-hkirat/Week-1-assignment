/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Print how long it took for all 3 promises to resolve.
 */


function waitOneSecond() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Promise 1 resolved successfully')
        }, 1000)
    })
}

function waitTwoSecond() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Promise 2 resolved successfully')
        }, 2000)
    })
}

function waitThreeSecond() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Promise 3 resolved successfully')
        }, 3000)
    })
}

function calculateTime() {
    return Promise.all([waitOneSecond(), waitTwoSecond(), waitThreeSecond()])
        .then((res) => {
            const end = Date.now()
            console.log('Promise resolved successfully after ', ((end - start) / 1000))
        })
        .catch(err => {
            console.log('Failed to resolve promise')
        })
}

const start = Date.now()
calculateTime()