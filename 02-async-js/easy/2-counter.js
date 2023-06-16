let count = 0;

const rec = () => {
    console.log(count);
    count += 1;
    setTimeout(rec,1000);
}

rec();