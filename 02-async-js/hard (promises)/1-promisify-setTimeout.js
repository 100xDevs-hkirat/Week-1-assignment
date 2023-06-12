/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/


function wait(n) {
    return new Promise((resolve,reject)=>{
        if(n%2==0)
           setTimeout(resolve,n*1000)
        else
           setTimeout(reject,n*1000)
    });
}

wait(3).then(()=> console.log('the number of seconds passed is even'))
       .catch(()=> console.log('the number of seconds passed is odd '))
