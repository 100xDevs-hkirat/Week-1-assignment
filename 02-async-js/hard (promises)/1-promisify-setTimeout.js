/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {

    return new Promise((resolve, rejecct) => {
        setTimeout(function fun() {
            resolve('okok')
        }, n * 1000)
    })
}
(async () => {
    let res = await wait(10)
    console.log(res)
})()