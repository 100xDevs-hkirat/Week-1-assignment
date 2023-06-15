let counter = 1;

function count() {
    console.log(counter);
    counter++;
}

setInterval(count, 1000);