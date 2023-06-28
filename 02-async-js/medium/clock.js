let hour = new Date().getHours()
let minute = new Date().getMinutes()
let second = new Date().getSeconds()
let meridiam = ""

function clock(){
    hour = new Date().getHours()
    minute = new Date().getMinutes()
    second = new Date().getSeconds()

    if(hour > 12){
        hour = hour-12
        meridiam = 'PM'
    }
    else{
        hour = new Date().getHours()
        meridiam = 'AM'
    }

    console.log(hour + ':' + minute + ':' + second + ' ' + meridiam)
}

setInterval(()=>{
   clock();
},1000)