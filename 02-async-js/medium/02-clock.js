function clock(){
    const date = new Date();

    const hours = String(date.getHours()).padStart(2,'0');
    const mins = String(date.getMinutes()).padStart(2,'0');
    const secs = String(date.getSeconds()).padStart(2,'0');


    let ampm="AM";
    let hours12 = hours;
    if(hours>12){
        ampm="PM";
        hours12 = String(hours - 12).padStart(2, '0');
    }
    if (hours12 === '00') {
        hours12 = '12';
      }

    const time12Hour = `${hours12}:${mins}:${secs} ${ampm}`;
    console.log(time12Hour);
}

setInterval(clock, 1000);