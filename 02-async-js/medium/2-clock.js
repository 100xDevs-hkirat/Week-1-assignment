function clock() {
  setInterval(() => {
    const timeNow = new Date();

    let hours = timeNow.getHours().toString().padStart(2, "0");
    const minutes = timeNow.getMinutes().toString().padStart(2, "0");
    const seconds = timeNow.getSeconds().toString().padStart(2, "0");

    console.clear();
    console.log(`${hours}:${minutes}:${seconds}`);

    let meridiem = "AM";
    if (timeNow.getHours() > 12) {
      hours = (timeNow.getHours() - 12).toString().padStart(2, "0");
      meridiem = "PM";
    } else if (timeNow.getHours() === 0) {
      hours = "12";
    }

    console.log(`${hours}:${minutes}:${seconds} ${meridiem}`);
  }, 1000);
}

clock();
