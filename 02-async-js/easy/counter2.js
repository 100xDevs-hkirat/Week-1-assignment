let counter = 0;

function count() {
    counter++;
    console.log(counter);
    setTimeout(count, 1000);
}

count();