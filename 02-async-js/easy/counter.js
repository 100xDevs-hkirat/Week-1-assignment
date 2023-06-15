let cnt = 1;

function Counter() {
    console.log(cnt);
    cnt++;
    setTimeout(Counter, 1000)
}

Counter();