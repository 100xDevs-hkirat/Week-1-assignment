function counter(count) {
    console.clear();
    console.log(count);
    setTimeout(() => {
        counter(count + 1);
    }, 1000);
}

counter(0);