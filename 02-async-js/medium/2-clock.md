Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
clock that shows you the current machine time?

Can you make it so that it updates every second, and shows time in the following formats -

- HH:MM::SS (Eg. 13:45:23)

- HH:MM::SS AM/PM (Eg 01:45:23 PM)

## Code For HH:MM::SS

function getTime(){
let date = new Date();
const hrs = date.getHours();
const min = date.getMinutes();
const sec = date.getSeconds();
console.log(hrs+":"+min+":"+sec)
}

setInterval(getTime,1000)

## Code for HH:MM::SS AM/PM

function getTime(){
let date = new Date();
let hrs = date.getHours();
let min = date.getMinutes();
let sec = date.getSeconds();
if(hrs>12){
hrs = hrs - 12;
sec = sec+ " PM"
}
else if(hrs == 12){
sec = sec + " PM"
}
else{
sec = sec + " AM"
}
console.log(hrs+":"+min+":"+sec)
}

setInterval(getTime,1000)
