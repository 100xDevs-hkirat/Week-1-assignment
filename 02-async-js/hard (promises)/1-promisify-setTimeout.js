/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {
    function promiseBody(resolve) {
    setTimeout(resolve,5000);
}
function callPromise() {
    return new Promise(promiseBody);

} 
function greetMe() {
    console.log("heybabe");
}
let a=callPromise();
console.log(a);
a.then(greetMe);
}
