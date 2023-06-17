/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Print how long it took for all 3 promises to resolve.
 */


function waitOneSecond() {
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("wait 1 sec resolved")
        },1*1000)
    })
}

function waitTwoSecond() {
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("wait 2 sec resolved")
        },2*1000)
    })
}

function waitThreeSecond() {
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("wait 3 sec resolved")
        },3*1000)
    })
}

function calculateTime() {
    let start = new Date().getTime()
    let end;
    Promise.all([waitOneSecond(),waitTwoSecond(),waitThreeSecond()]).then((res)=>{
        console.log(res)
        end = new Date().getTime()
        console.log("Timetaken(s):",(end-start)/1000)
    })
}
calculateTime()