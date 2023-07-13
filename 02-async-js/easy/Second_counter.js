
let ctr = 0;

function counter() {
                ctr = ctr + 1;
                console.log(ctr);
    setTimeout(counter, 1000)
}
counter();

