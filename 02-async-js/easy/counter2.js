let cnt = 1;

function updateTime(){
    console.clear();
    console.log(cnt);
    cnt += 1;

    setTimeout(() => {
        updateTime()
    }, 1000)
}

updateTime()