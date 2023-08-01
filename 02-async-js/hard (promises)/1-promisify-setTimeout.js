/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/


export default function wait(n) {
    return new Promise((resolve) => {
        setTimeout(()=>{
            resolve("waiting successfull");
        }, n*1000);
    });   
}