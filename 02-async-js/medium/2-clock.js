// Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
// clock that shows you the current machine time?

// Can you make it so that it updates every second, and shows time in the following formats - 

//  - HH:MM::SS (Eg. 13:45:23)

//  - HH:MM::SS AM/PM (Eg 01:45:23 PM)


// const currentDate = new Date();

// const hour = currentDate.getHours();
// const minute = currentDate.getMinutes();
// const second = currentDate.getSeconds();

// console.log(hour,minute,second);
// // setInterval()
//     const time = () => {
//     let timeNow = hour+":"+minute+"::"+second 
//     console.log(timeNow)
//     timeNow = currentDate.getHours() + ":" + currentDate.getMinutes() + "::" + currentDate.getSeconds();
//     setTimeout(time(), 1000)
// }

const time = () =>{
    const currentDate = new Date();
    timeNow = currentDate.getHours() + ":" + currentDate.getMinutes() + "::" + currentDate.getSeconds();
    console.log(timeNow)
}
// setTimeout(time(), 1000)
// time()
setInterval(time, 1000);