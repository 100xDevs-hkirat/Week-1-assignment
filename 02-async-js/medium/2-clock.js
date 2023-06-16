setInterval(() => {
  console.log(new Date(Date.now()).toISOString().split("T")[1].split(".")[0]);
}, 1000);
