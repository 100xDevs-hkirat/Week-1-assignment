const printTime = () => {
  const date = new Date();

  let hour = date.getHours();
  let minute = date.getMinutes();
  let second = date.getSeconds();

  hour = hour < 10 ? `0${hour}` : hour;
  minute = minute < 10 ? `0${minute}` : minute;
  second = second < 10 ? `0${second}` : second;

  console.log(`24-hour format: ${hour}:${minute}:${second}`);

  if (hour > 12) {
    hour -= 12;
  }

  if (hour === 0) {
    hour = 12;
  }

  hour = hour < 10 ? `0${hour}` : hour;

  console.log(`${hour}:${minute}:${second}`);
};

const intervalId = setInterval(() => printTime(), 1000);
