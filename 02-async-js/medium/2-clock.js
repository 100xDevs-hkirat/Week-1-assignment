const printClockTime = () => {
  const currentDate = new Date();

  console.clear();
  console.log(
    currentDate.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
    })
  );
  console.log(
    currentDate.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    })
  );
};

setInterval(printClockTime, 1000);
