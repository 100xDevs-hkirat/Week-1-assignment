/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Print how long it took for all 3 promises to resolve.
 */


function waitOneSecond() {
    return new Promise((resolve) => {
        setTimeout(() => resolve(), 1000);
    })
}



function waitTwoSecond() {
    return new Promise((resolve) => {
        setTimeout(() => resolve(), 2000);
    })
}

function waitThreeSecond() {
    return new Promise((resolve) => {
        setTimeout(() => resolve(), 3000)
    })
}

function calculateTime() {

    const d = new Date();
    let startTime = d.getTime();

    const onSecond = new waitOneSecond();
    const twoSecond = new waitTwoSecond();
    const threeSecond = new waitThreeSecond();

    const allPromises = [onSecond, twoSecond, threeSecond];

    Promise.all(allPromises).then(values => {
        const anotherDate = new Date();
        let finishTime = anotherDate.getTime();

        console.log("Promise resolved in ", (finishTime - startTime) / 1000, " secs");
    }).catch(err => {
        console.log(err);
    })


}

calculateTime();