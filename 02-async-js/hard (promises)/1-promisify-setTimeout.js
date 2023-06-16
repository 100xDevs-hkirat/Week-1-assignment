/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/






function wait(n) {



    let timeoutPromise = new Promise((resolve)=>setTimeout(resolve,n*1000));

    return timeoutPromise;

}

function printSomething(){
    console.log("set time out promise resolved!!!")
}

wait(10).then(printSomething)

