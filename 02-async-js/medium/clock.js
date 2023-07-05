

function Hour24CurrTime(){
    var date = new Date();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let seconds = date.getSeconds();
    console.log(hour + ":" + minute + ":" + seconds );
}

function Hour12CurrTime(){
    var date = new Date();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let seconds = date.getSeconds();
    if ( hour > 12)hour = hour - 12;
    let res = "";
    res+=hour + ":" + minute + ":" + seconds;
    console.log(res);   
    
}


setInterval(Hour24CurrTime , 1000);
setInterval(Hour12CurrTime , 1000);
