function currentTime() {
    let date = new Date();
    let hourIn24hrs = date.getHours();
    let minutes = date.getMinutes();
    let seconds =  date.getSeconds();

    let hourIn12hrs = (hourIn24hrs > 12) ? hourIn24hrs%12 : hourIn24hrs
    let meridiem = (hourIn24hrs >= 12) ? " PM" : " AM"

    let timeIn24hrs = hourIn24hrs + ":" + minutes + ":" + seconds;
    let timeIn12hrs = hourIn12hrs + ":" + minutes + ":" + seconds + meridiem;

    console.clear();
    console.log("Time in 24 hr format: " + timeIn24hrs);
    console.log("Time in 12 hr format: " + timeIn12hrs);
}
setInterval(currentTime,1000)