// Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
// clock that shows you the current machine time?

// Can you make it so that it updates every second, and shows time in the following formats - 

//  - HH:MM::SS (Eg. 13:45:23)

//  - HH:MM::SS AM/PM (Eg 01:45:23 PM)

function clock()
{
    var date = new Date();
    var hourIn24hrs = date.getHours();
    var minutes = date.getMinutes();
    var seconds =  date.getSeconds();
    var timeIn24hrs = hourIn24hrs + ":" + minutes + ":" + seconds;
    console.clear();
    console.log("Time in 24 hr format: " + timeIn24hrs);

    var hourIn12hrs = hourIn24hrs;
    var meridiem = " AM";
    
    if(hourIn24hrs > 12){
        hourIn12hrs = hourIn24hrs % 12;
    }

    if(hourIn24hrs >= 12){
        meridiem = " PM";
    }

    var timeIn12hrs = hourIn12hrs + ":" + minutes + ":" + seconds + meridiem;
    console.log("Time in 12 hr format: " + timeIn12hrs);

}

setInterval(clock, 1000);