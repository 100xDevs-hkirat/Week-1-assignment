let cnt = 1;

function updateTime(){
    console.clear();
    console.log(cnt);
    cnt += 1;
}

setInterval(updateTime, 1000)