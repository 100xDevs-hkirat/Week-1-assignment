let timer = 1;

function callTimer() {
  console.clear();
  console.log(timer);
  timer++;
  setTimeout(callTimer, 1000);
}

callTimer();
