let counter = 0;

function  usingTimeout() {
    console.log(counter);
    counter++;
    setTimeout(usingTimeout, 1000);
}

setTimeout(usingTimeout, 1000);
