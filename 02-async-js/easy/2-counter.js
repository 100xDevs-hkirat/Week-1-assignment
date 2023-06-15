let counter = 0;
function updateCounter() {
    counter++;
    console.clear();
    console.log(counter);
}

function recurseTimeout() {
    updateCounter();
    setTimeout(recurseTimeout, 1000);
}

setTimeout(recurseTimeout, 1000);