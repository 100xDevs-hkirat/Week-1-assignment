let counter = new Date().getTime();

function dateCounter() {
  console.clear();
  console.log(
    new Date(counter).toLocaleTimeString(undefined, {
      timeZone: "Asia/Kolkata",
      hour12: false,
    })
  );
  console.log(
    new Date(counter).toLocaleTimeString(undefined, {
      timeZone: "Asia/Kolkata",
      hour12: true,
    })
  );
  counter += 1000;
}

setInterval(dateCounter, 1000);
