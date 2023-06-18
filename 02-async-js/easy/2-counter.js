let cnt = 1;

function a() {
    console.log(cnt)
    cnt++;
    setTimeout(a, 1000);
}

setTimeout(a, 1000);