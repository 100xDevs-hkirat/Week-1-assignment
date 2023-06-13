function counter(n) {
    let count = 0;
    (function incCount() {
        console.log(++count);
        if(count === n) return;
        setTimeout(incCount, 1000);
    })();
}

counter(10);