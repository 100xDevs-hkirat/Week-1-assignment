let counter = 0;

function incrementCounter() {
    console.log(counter);
    counter = counter + 1;
}

setInterval(incrementCounter, 1000);
