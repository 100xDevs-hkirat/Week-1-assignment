/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Print how long it took for all 3 promises to resolve.
 */


function waitOneSecond() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve("Resolved One Second")
        }, 1000)
    })
}

function waitTwoSecond() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve("Resolved Two Second")
        }, 2000)
    })
}

function waitThreeSecond() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve("Resolved Three Second")
        }, 3000)
    })
}

function calculateTime() {

    const starttime = Date.now();
    Promise.all([waitOneSecond(), waitTwoSecond(), waitThreeSecond()])
        .then(response => console.log((Date.now()) - starttime));

}

calculateTime();