/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {

    console.log("this is before return");
    return new Promise((resolve, reject) =>
        setTimeout(()=>{
            if(n === 'undefined' || n ===''){
                reject(`invalid n: ${n} !!!`);
            }
            resolve("resolved !!");
        }, n*1000)

    );
}


wait().then((message)=> {
    console.log(message);
}).catch((reson) => {
    console.log(reson);
});