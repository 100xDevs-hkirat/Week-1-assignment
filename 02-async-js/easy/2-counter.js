function counter(i = 0) {
    setTimeout(() => { console.clear(); console.log(i); ++i; counter(i); }, 1000);
}

counter();