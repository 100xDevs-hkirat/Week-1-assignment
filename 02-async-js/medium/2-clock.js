
function clockFormat12(hours, mins, secs){
  let time = "AM";
  if (hours > 12){
    time = "PM";
    hours -= 12;
    if (hours < 10){
      hours = `0${hours}`; 
    }
  }
  return `Time: ${hours}:${mins}:${secs} ${time}`;
}

function clockFormat24(hours, mins, secs) {
  return `Time: ${hours}:${mins}:${secs}`;
}

function clock(format) {
  let hours = new Date().getHours();
  let mins = new Date().getMinutes();
  let secs = new Date().getSeconds();

  if (hours < 10){
    hours = `0${hours}`; 
  }
  if (mins < 10){
    mins = `0${mins}`; 
  }
  if (secs < 10){
    secs = `0${secs}`; 
  }

  console.clear();
  const time = format(hours, mins, secs);
  console.log(time);
}

// setInterval(() => {
//   clock(clockFormat24);
// }, 1000);

setInterval(() => {
  clock(clockFormat12);
}, 1000);
