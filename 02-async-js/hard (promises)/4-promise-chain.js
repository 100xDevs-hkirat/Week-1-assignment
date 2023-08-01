/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Print out the time it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */

function waitOneSecond() {
  return new Promise((resolve) => {
    setTimeout(resolve, 1 * 1000);
  });
}

function waitTwoSecond() {
  return new Promise((resolve) => {
    setTimeout(resolve, 2 * 1000);
  });
}

function waitThreeSecond() {
  return new Promise((resolve) => {
    setTimeout(resolve, 3 * 1000);
  });
}

async function calculateTime() {
    console.log("separate promise start -> \n");

    const startTime = Date.now();
    await waitOneSecond().then(()=>
        waitTwoSecond().then(() => 
            waitThreeSecond().then(() => 
                console.log("All three completed")
        ))
    )
    const endTime = Date.now();
    console.log("in mseconds -> " + (endTime - startTime));
    console.log("when three promises work in chain (saperataly) then total time = sum of times")

}

calculateTime();