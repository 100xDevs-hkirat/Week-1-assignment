let counter = 0;

const printTime = ()=>{
    counter++;
    console.clear();
    console.log(counter);
}


setInterval(printTime,1000);

// ----------------------------------------------------------------
//Press ctrl+c to stop the timer
// ----------------------------------------------------------------