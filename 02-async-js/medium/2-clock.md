Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
clock that shows you the current machine time?

Can you make it so that it updates every second, and shows time in the following formats - 

 - HH:MM::SS (Eg. 13:45:23)

 - let time = new Date();
let hour = time.getHours();
let minutes = time.getMinutes();
let seconds = time.getSeconds();
function fn() {
  seconds++;
  if(seconds > 59){
    seconds = 0;
    minutes++;
  }
  if(minutes > 59){
    minutes = 0;
    hour++;
  }
  if(hour > 23){
    hour = 0;
  }
  console.log(hour+':'+minutes+':'+seconds);
}

setInterval(fn, 1000);

 - HH:MM::SS AM/PM (Eg 01:45:23 PM)
let time = new Date();
let hour = time.getHours();
let minutes = time.getMinutes();
let seconds = time.getSeconds();
let temp = ["AM", "PM"];
let flag = 0;
function fn() {
  seconds++;
  if(seconds > 59){
    seconds = 0;
    minutes++;
  }
  if(minutes > 59){
    minutes = 0;
    hour++;
  }
  if(hour > 12){
    hour = hour - 12;
    flag  = Math.abs(flag - 1);
  }
  console.log(hour+':'+minutes+':'+seconds+" " + temp[flag]);
}

setInterval(fn, 1000);
