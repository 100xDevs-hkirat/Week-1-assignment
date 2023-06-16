function currentTime() {
  console.clear();
  const date = new Date();
  const hour = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  const isAmOrPm = hour >= 12 ? "PM" : "AM";
  console.log(`${hour}:${minutes}:${seconds} ${isAmOrPm}`);
}

console.log(
  setInterval(() => {
    currentTime();
  }, 1000)
);
