//const readline = require('readline');
import readline from 'readline';

function updateClock() {
  const currentTime = new Date();
  const hours = currentTime.getHours().toString().padStart(2, '0');
  const minutes = currentTime.getMinutes().toString().padStart(2, '0');
  const seconds = currentTime.getSeconds().toString().padStart(2, '0');

  readline.clearLine(process.stdout, 0);
  readline.cursorTo(process.stdout, 0);

  process.stdout.write(`Current Time: ${hours}:${minutes}:${seconds}`);
}

// Update the clock every second
setInterval(updateClock, 1000);
