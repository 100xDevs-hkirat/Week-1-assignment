/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve("After " + n + "seconds :")
        }, n * 1000)
    })
}

function takenMedicine() {
    console.log("Medicine has been taken")
}
console.log("Take Medicine after 2 Seconds")
wait(2).then(function (result) {
    console.log(result)
    takenMedicine()
})

