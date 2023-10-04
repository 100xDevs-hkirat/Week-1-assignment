function updateClock() {

    const now = new Date();

    // Get time components

    const hours = now.getHours();

    const minutes = now.getMinutes();

    const seconds = now.getSeconds();

    const ampm = hours >= 12 ? 'PM' : 'AM';

   

    // Format time as HH:MM:SS or HH:MM:SS AM/PM

    const formattedTime = `${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)} ${ampm}`;  

    // Display the formatted time in the console (you can change this to update a web page)

    console.log(formattedTime);

}
 

function formatTime(time) {

    return time < 10 ? `0${time}` : time;

}


// Update the clock every second using setInterval

setInterval(updateClock, 1000);
 

// Initial update

updateClock();