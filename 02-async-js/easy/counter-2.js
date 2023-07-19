function counter(start, delay) {
    console.clear();
    console.log(start);
    start++;
    setTimeout(() => {
        counter(start, delay);
    }, delay);
}


counter(1, 1000);