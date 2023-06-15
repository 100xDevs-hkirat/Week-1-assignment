Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
clock that shows you the current machine time?

Can you make it so that it updates every second, and shows time in the following formats - 

 - HH:MM::SS (Eg. 13:45:23)

 - HH:MM::SS AM/PM (Eg 01:45:23 PM)
"
setInterval(()=>{
    let d=new Date();
    let h=d.getHours();
    let m=d.getMinutes();
    let s=d.getSeconds();
    sf="am"
    if(h>12){
        h=h-12;
        sf="pm"
    }
    console.log(`${h} : ${m} : ${s} ${sf}`);
},1000)
"