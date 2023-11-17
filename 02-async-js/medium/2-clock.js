// Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
// clock that shows you the current machine time?

// Can you make it so that it updates every second, and shows time in the following formats - 

//  - HH:MM::SS (Eg. 13:45:23)

//  - HH:MM::SS AM/PM (Eg 01:45:23 PM)


let interval= setInterval(getTime,1000)

function getTime()
{
    console.clear()
    let currentTime = new Date()
  
    ;
    let hours24 = currentTime.getHours()
    let hours12 = (hours24 % 12) || 12;
    let minute = currentTime.getMinutes()
    let second = currentTime.getSeconds()
    let ampm = hours24 < 12 ? 'AM' : 'PM'
    let currentTimeInFormat = hours12+ ':'+minute+ ':'+second  +ampm
    console.log(currentTimeInFormat)
}

setTimeout(() => {
    clearInterval(interval)
}, 5000);