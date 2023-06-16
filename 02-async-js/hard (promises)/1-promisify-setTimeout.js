/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            console.log("resolve after n sec");
            resolve("resolve after n seconds");
        },n*1000)
    })
}


