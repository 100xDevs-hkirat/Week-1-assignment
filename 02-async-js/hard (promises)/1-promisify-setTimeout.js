/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {
    const promise = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const data ="Resolved";
            resolve(data);
        },n)
    })
    return promise;
}

wait(1000).then( data => console.log(data));