/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

//Method 1 Using .then and .catch
function wait(n) {
    return new Promise (function(resolve){
        setTimeout(()=>{
            resolve();
        },n*1000)
    })
}
wait(5).
then((result)=>{
    console.log("Promise is resolved after 5 seconds")
})
.catch((error) =>{
   console.log("Error occured:",error)
})

//Method 2 By doing async/await

function wait(n){
    return new Promise(function(resolve){
        setTimeout(resolve,n*1000)
    })
}

async function delayInReturn(){
    try{
        await wait(5)
        console.log("Promise is resolved after 5 seconds")
    }
    catch(error){
       console.log("Error occured:",error)
    }
}
delayInReturn()