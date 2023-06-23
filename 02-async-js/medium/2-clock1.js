var counter_sec = 0;
var counter_min = 0;
var counter_hour = 1;
function StopWatch(){
    console.clear();
    if(counter_sec == 60){
        counter_min += 1;
        counter_sec = 0;
    }
    if(counter_min == 60){
        counter_hour += 1;
        counter_min = 0;
        counter_sec = 0;
    }
    if(counter_hour == 24){
        counter_hour = 1;
        counter_min = 0;
        counter_sec = 0;
    }
    console.log(`${counter_hour}:${counter_min}:${counter_sec}`);
    counter_sec += 1;
}
setInterval(StopWatch,1000);