var counter = 1;

function printCounter(){
    console.clear();
    console.log(counter);
    counter+=1;
}

setTimeout(printCounter,1000);