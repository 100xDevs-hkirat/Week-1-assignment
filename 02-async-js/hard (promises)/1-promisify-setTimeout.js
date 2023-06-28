/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {
   return new Promise((resolve , reject)=>{
        setTimeout(()=>{
           resolve('Alaram');
        },n * 1000)
    })
}

//1st way
wait(10).then(result => console.log(result + ' use then '))


//2nd 

const callingWait = async()=>{
   
    const result = await wait(10);
   
    console.log(result + ' use async and await') 
}

callingWait()