/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Print how long it took for all 3 promises to resolve.
 */


function waitOneSecond() {
    return new Promise((resolve, rejecct) => {
        setTimeout(()=>{
            resolve('okok')
        }
        , 1000)
    })

}

function waitTwoSecond() {
    return new Promise((resolve, rejecct) => {
        setTimeout(()=>{
            resolve('okok')
        }
        , 2000)
    })

}

function waitThreeSecond() {
    return new Promise((resolve, rejecct) => {
        setTimeout(()=>{
            resolve('okok')
        }
        , 3000)
    })

}

async function calculateTime() {
    const st=new Date().getTime()
    // console.log('res is ',res)
    let res=await Promise.all([waitOneSecond(),waitTwoSecond(),waitThreeSecond()])
    console.log("res ",res)
    const end=new Date().getTime()
    console.log("time taken is ",(end-st)/1000)
}
calculateTime()