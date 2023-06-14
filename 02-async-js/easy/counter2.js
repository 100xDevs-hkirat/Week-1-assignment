var count=0;

function repeat(count) {
    console.log(count);
    setTimeout(() => {
        console.clear();
    }, 1000);
    setTimeout(repeat, 1000, ++count);
}
repeat(count);