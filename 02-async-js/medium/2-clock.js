


setInterval(()=>{
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const setAm = hours>=12 ? 'pm' : 'am';

    const TwentyFourTime = hours + ':' + minutes + ':' + seconds;
    const TwelveHours = hours % 12 || 12;

    console.log(TwentyFourTime);
    console.log(`${TwelveHours}:${minutes}:${seconds} ${setAm}`);
},1000)