var counter_sec = 0;
var counter_min = 0;
var counter_hour = 1;
var AM = "AM";
var PM = "PM";
var is_AM = true;

function is_Time(isMember){
    return (isMember ? 'AM' : 'PM');
}

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
    if(counter_hour == 12){
        counter_hour = 1;
        counter_min = 0;
        counter_sec = 0;
        if(is_AM){
            is_AM = false;
        }
        else{
            is_AM = true;
        }
    }

    console.log(`${counter_hour}:${counter_min}:${counter_sec}::${is_Time(is_AM)}`);
    counter_sec += 1;
}
setInterval(StopWatch,1000);