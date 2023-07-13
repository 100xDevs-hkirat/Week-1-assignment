/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/



function wait(n) {
    let ans = new Promise((resolve) => {
        setTimeout(resolve, n);
    })
    return ans;
}

let medicine = new wait(3000);
medicine.then(() => {
    console.log("medicine Arrived");
})

console.log("Last");