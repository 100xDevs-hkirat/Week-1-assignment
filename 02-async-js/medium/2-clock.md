Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
clock that shows you the current machine time?

Can you make it so that it updates every second, and shows time in the following formats - 

 - HH:MM::SS (Eg. 13:45:23)

 - HH:MM::SS AM/PM (Eg 01:45:23 PM)

  function showTime() {
    var date = new Date();
    var hours = date.getHours()
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    console.log(padZero(hours.toString())+":"+padZero(minutes.toString())+":"+padZero(seconds.toString()));
    var tf = 'AM';
    if(hours == 0) hours = 12;
    else if(hours > 12){
        hours-=12;
        tf = 'PM';
    }
    console.log(padZero(hours.toString())+":"+padZero(minutes.toString())+":"+padZero(seconds.toString())+" "+tf);
   
  }
  
  setInterval(showTime, 1000);
