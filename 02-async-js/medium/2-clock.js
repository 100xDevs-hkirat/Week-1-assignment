const date = new Date();

let sec = date.getSeconds();
let min = date.getMinutes();
let hour = date.getHours();

const updateTime = () =>{
    sec++;
    if(sec>59){
        sec=0;
        min++;
        if(min>59){
            min=0;
            hour++;
            if(hour>23){
                hour=0;
            }
        }
    }
    console.clear();
    console.log(`${hour} : ${min} :${sec}`)
}

setInterval(updateTime,1000);
