function printTime(){
    var current_date = new Date();
    var string = current_date.getHours() + ":" + current_date.getMinutes() + ":" + current_date.getSeconds();
    console.log(string);
}

setInterval(printTime, 1000);