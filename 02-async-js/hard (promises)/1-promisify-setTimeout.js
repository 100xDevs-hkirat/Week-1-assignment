/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve()
        }, n * 1000)
    })
}

function takeMedicine() {
    console.log("Take Medicine")
}
c = wait(2)
console.log(c)
c.then(() => console.log(c))
