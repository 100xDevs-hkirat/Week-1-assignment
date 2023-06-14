/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 */

function sleep(n) {

    return new Promise((resolve,rejecct)=>{
        setTimeout(function fun(){
            resolve('okok')
        },n*1000)
    })
    }
     (async ()=>{
        let res=await wait(10)
        //waiting finished you can do whatever you want now
        console.log(res)
    })()