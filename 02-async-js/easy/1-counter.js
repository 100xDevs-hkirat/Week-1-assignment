function counter() {
    let i = 0;
    setInterval(() => {
        console.clear();
        console.log(i);
        ++i;
    }, 1000);
}

counter();