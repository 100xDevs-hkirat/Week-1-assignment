const displayTime = () => {
  console.clear();
  let currentDate = new Date();
  let utc = currentDate.toLocaleTimeString([], { hour12: false });
  utc = [...utc.slice(0, 5), ":", utc.slice(5)].join("");
  console.log(utc);
  let locale = currentDate.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digits",
    second: "2-digits",
  });
  locale = [...locale.slice(0, 5), ":", locale.slice(5)].join("");
  console.log(locale);
};

setInterval(displayTime, 1000);

// adding test3
