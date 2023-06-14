var counter = 1;

function printCounter(){
    counter++;
    console.log(counter);
    setTimeout(printCounter,1000);
}

printCounter();