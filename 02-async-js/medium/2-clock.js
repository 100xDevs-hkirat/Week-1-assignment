/*
Code Author : MrDeepThought A.K.A IamArsh A.K.A Arshpreet Singh
Time : 18:14 16th June,2023
Problem : Clock
Description : We have to implement a clock which represents the time in 12hr and 24hr formats on the screen whcih updates regularly
              after every second.
*/
function clock(){
    let cnt = 0;
    setInterval(()=>{
        let now = new Date();
        let secs,mins,hrs;
        [secs,mins,hrs] = [now.getSeconds(),now.getMinutes(),now.getHours()];
        let period = hrs >= 12 ? "PM" : "AM";
        secs = secs+cnt;
        mins = secs >= 60 ? mins+1 : mins;
        hrs = mins >= 60 ? hrs+1 : hrs;
        secs%=60
        mins%=60;
        hrs%=60;
        let hrs12 = Math.floor(hrs%12);
        console.clear();
        format24(hrs,mins,secs);
        format12(hrs12,mins,secs,period);
        cnt+=1;
    },1000);
}

function format24(hrs,mins,secs){
    hrs = hrs >= 10 ? `${hrs}`: `0${hrs}`;
    mins = mins >= 10 ? `${mins}`: `0${mins}`;
    secs = secs >= 10 ? `${secs}`: `0${secs}`;
    console.log(`24hr format: ${hrs}:${mins}::${secs}`);
}

function format12(hrs,mins,secs,period){
    hrs = hrs >= 10 ? `${hrs}`: `0${hrs}`;
    mins = mins >= 10 ? `${mins}`: `0${mins}`;
    secs = secs >= 10 ? `${secs}`: `0${secs}`;
    console.log(`12hr format: ${hrs}:${mins}::${secs} ${period}`);
}

clock();