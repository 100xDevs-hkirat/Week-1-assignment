const incrementCounter = require('../easy/1-counter.js');

function clock() {
    incrementCounter(() => {
        const date = new Date();

        const hours = date.getHours();
        const minutes = date.getMinutes();
        const seconds = date.getSeconds();

        const meridiem = hours >= 12 ? 'PM' : 'AM';
        const formatted24Hours = hours.toString().padStart(2, '0');
        const formattedHours = (hours % 12 || 12).toString().padStart(2, '0');
        const formattedMinutes = minutes.toString().padStart(2, '0');
        const formattedSeconds = seconds.toString().padStart(2, '0');

        console.log(`${formatted24Hours}:${formattedMinutes}:${formattedSeconds}`);
        console.log(`${formattedHours}:${formattedMinutes}:${formattedSeconds} ${meridiem}`);
    });
}
