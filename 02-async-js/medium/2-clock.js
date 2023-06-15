setInterval(() => {
  const timeNow = new Date();
  console.clear();
  console.log(
    `${timeNow.getHours()}:${timeNow.getMinutes()}:${timeNow.getSeconds()}`
  );

  let hr = timeNow.getHours();
  let ap = "am";
  if (hr > 12) {
    hr -= 12;
    ap = "pm";
  }
  if (hr === 0) hr = 12;
  console.log(`${hr}:${timeNow.getMinutes()}:${timeNow.getSeconds()}${ap}`);
}, 1000);
