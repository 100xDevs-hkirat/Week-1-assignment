let counter = 0;

function increamentCounter(){
    counter++;
    console.log(counter);
    setTimeout(increamentCounter,1000); //setTimeout call the function increamentCounter after 1 secs
}

increamentCounter();