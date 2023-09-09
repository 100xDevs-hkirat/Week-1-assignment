
function formatTime(value){
      return value.toString().padStart(2,'0');
}


function printMachineTime(){
      let Time = "";
      let date = new Date();
      let min = formatTime(date.getMinutes());
      let sec = formatTime(date.getSeconds());
      let hrs = formatTime(date.getHours());

      if(hrs < 12 ){
            Time = "AM";
      }
      else{
            hrs = hrs - 12;
            Time = "PM"
      }
      const answer = hrs+":"+min+":"+sec+" "+Time;
      console.log(answer);
}


function printTime(){
      console.clear();
      printMachineTime();
}

setInterval(printTime,1000);