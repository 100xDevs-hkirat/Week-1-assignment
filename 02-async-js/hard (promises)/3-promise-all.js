/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Print how long it took for all 3 promises to resolve.
 */


function waitOneSecond() {
    return new Promise(function(resolve){
        setTimeout(()=>resolve("resolved after 1 sec"),1000)
    })
}

function waitTwoSecond() {
    return new Promise(function(resolve){
        setTimeout(()=>resolve("resolved after 2 sec"),2000)
    })
}

function waitThreeSecond() {
    return new Promise(function(resolve){
        setTimeout(()=>resolve("resolved after 3 sec"),3000)
    })
}

function calculateTime() {
    let before=new Date();
    let hrs=before.getHours();
    let mins=before.getMinutes();
    let secs=before.getSeconds();
    console.log(`Before resolving ${hrs} : ${mins} :${secs}`);
    const allPromises=Promise.all([waitOneSecond(),waitTwoSecond(),waitThreeSecond()]);
    allPromises.then(res=>{console.log(res)
            after=new Date();
     hrs=after.getHours();
    mins=after.getMinutes();
    secs=after.getSeconds();
    console.log(`After resolving ${hrs} : ${mins} :${secs}`);              
                          })

};
calculateTime();