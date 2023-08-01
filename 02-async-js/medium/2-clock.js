// Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
// clock that shows you the current machine time?

// Can you make it so that it updates every second, and shows time in the following formats - 

//  - HH:MM::SS (Eg. 13:45:23)

//  - HH:MM::SS AM/PM (Eg 01:45:23 PM)


export default function clock(interval)
{
    let t = 0;
    const timeClock = setInterval(()=>{
        var date = new Date().toLocaleTimeString('en', {hour: '2-digit', minute: '2-digit', second: '2-digit'});
        console.log("-- "+date+" --");

        if(++t >= interval)
        {
            clearInterval(timeClock);
        }
    }, 1*1000);
}

clock(2);