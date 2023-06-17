const padZero = (number) => number.toString().padStart(2, "0");

const get12HrFormat = (timeStamp) => {
  const hrs = timeStamp.getHours();
  const mins = timeStamp.getMinutes();
  const secs = timeStamp.getSeconds();

  const amPm = hrs >= 12 ? "PM" : "AM";

  const adjustedHours = hrs % 12 === 0 ? 12 : hrs % 12;

  const formattedTime = `${padZero(adjustedHours)}:${padZero(mins)}:${padZero(
    secs
  )} ${amPm}`;

  return formattedTime;
};

setInterval(() => {
  console.clear();
  const timeStamp = new Date();
  const _24HrFormat = timeStamp.toTimeString().split(" ")[0];

  const _12HrFormat = get12HrFormat(timeStamp);

  console.log(_24HrFormat);
  console.log(_12HrFormat);
}, 1000);
