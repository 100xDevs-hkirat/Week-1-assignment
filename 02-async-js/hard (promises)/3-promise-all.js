/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Print how long it took for all 3 promises to resolve.
 */ 


function waitOneSecond() {
   return new Promise(resolve =>{
       setTimeout(()=>{
        console.log("After 1 second")
        resolve()
       },1000)
   })
}
// waitOneSecond()

function waitTwoSecond() {
    return new Promise(resolve =>{
        setTimeout(function(){
         console.log("After 2 seconds")
         resolve()
        },2000)
    })
}

// waitTwoSecond()


function waitThreeSecond() {
    return new Promise(resolve =>{
        setTimeout(()=>{
         console.log("After 3 seconds")
         resolve()
        },3000)
    })
}

// waitThreeSecond()

Promise.all([waitOneSecond(),waitTwoSecond(),waitThreeSecond()])
.then(result=>{
  console.log(result)
})
.catch(error=>{
    console.error("Error occured:",error)
})

//Time taken for all 3 promises to resolve

const startTime = new Date().getTime()
function calculateTime() {
    Promise.all([waitOneSecond(),waitTwoSecond(),waitThreeSecond()])
    .then((result)=>{
        const endTime =new Date().getTime()
        const elapsedTime = endTime - startTime
        console.log(`Elapsed time is ${elapsedTime}`)
        console.log(result)
    })
    .catch((error)=>{
        console.error(error)
    })
}
  
calculateTime()