function ticker() {
  let date = new Date();
  console.log(`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);
}

function tickerWithDayZone() {
  let date = new Date();
  const dayZone = date.getHours() > 12 ? "PM" : "AM";
  console.log(
    `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()} ${dayZone}`
  );
}

// setInterval(() => {
//     console.clear();
//     ticker()
// }, 1000);

setInterval(() => {
  console.clear();
  tickerWithDayZone();
}, 1000);
