function clock() {
  let time = new Date();
  let hours = time.getHours();
  let minutes = time.getMinutes();
  let seconds = time.getSeconds();

  let period = hours > 12 ? "PM" : "AM";

  hours = hours % 12; // converting 24 hrs clock into 12 hour
  hours = hours ? hours : 12; // if hours ===0 keep it 12

  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  timeFormat = `${hours}:${minutes}:${seconds} ${period}`;

  console.log(timeFormat);
}

setInterval(clock, 1000);
