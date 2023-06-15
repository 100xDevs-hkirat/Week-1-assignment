let counter = 0;
function updateCounter() {
    counter++;
    console.clear();
    console.log(counter);
}

setInterval(updateCounter, 100000);