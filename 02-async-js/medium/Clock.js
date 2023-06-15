
const printTime = ()=>{
    const date = new Date().toTimeString().substring(0,8);
    const hours = date.substring(0,2);
    if(hours[0] !=="0"  && (hours[1]!=='1' || hours[1]!=='2') ){
        date[0] = '0';
        date[1] = (date.charCodeAt(1)-"2".charCodeAt(0)).toString();
        console.clear();
        console.log(date + " PM");
    }
    else{
        console.clear();
        console.log(date + " AM");
    }
}

setInterval(printTime,1000);

// ----------------------------------------------------------------
//Press ctrl+c to stop the timer
// ----------------------------------------------------------------