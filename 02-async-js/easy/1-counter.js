let count = 0;

function counter() {
    console.clear();
    console.log(count);
    count++;
}

setInterval(counter, 1000);