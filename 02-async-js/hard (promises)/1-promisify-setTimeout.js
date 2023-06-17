/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/


function wait(n) {
return new Promise((resolve)=>{
    setTimeout(resolve,n*1000)
})
}
let ans=wait(3);
ans.then(()=>{
    console.log('resolve is solved after 3 sec');
})