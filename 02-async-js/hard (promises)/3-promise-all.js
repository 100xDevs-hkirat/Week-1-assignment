/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Print how long it took for all 3 promises to resolve.
 */


function waitOneSecond() {
    return new Promise(function (resolve, reject) {
        setTimeout(() => resolve(1), 1000)
    })
}

function waitTwoSecond() {
    return new Promise(function (resolve, reject) {
        setTimeout(() => resolve(2), 2000)
    })
}

function waitThreeSecond() {
    return new Promise(function (resolve, reject) {
        setTimeout(() => resolve(3), 3000)
    })
}

function calculateTime() {
    let startTime = Date.now()
    Promise.all([waitOneSecond(), waitTwoSecond(), waitThreeSecond()])
        .then(function (result) {
            console.log(result)
            console.log((Date.now() - startTime) / 1000 + " Seconds")
        }
        )

}
// let x = 0
// waitOneSecond().then(function (result) {
//     x = result
//     console.log(x + "Hello")
// })
//console.log(x)
// waitTwoSecond().then(function () { console.log("2 Seconds") })
// waitThreeSecond().then(function () { console.log("3 Seconds") })

calculateTime()