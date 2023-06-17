// Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
// clock that shows you the current machine time?

// Can you make it so that it updates every second, and shows time in the following formats - 

//  - HH:MM::SS (Eg. 13:45:23)

//  - HH:MM::SS AM/PM (Eg 01:45:23 PM)

const curr=new Date();
var c=String(curr.getHours()+":"+curr.getMinutes()+":"+curr.getSeconds());
console.log(c);
var hour=curr.getHours();
var min=curr.getMinutes();
var sec=curr.getSeconds();
// var hour=23;
// var min=59;
// var sec=50;
// console.log()
function Current(){
  sec++;
  if(sec==60){
    min++;
    sec=0;
  }
  if(min===60){
    hour++;
    min=0;
  }
  if(hour===24){
    hour=0;
    min=0;
    sec=0;
  }
  console.clear();
  c1=String(hour+":"+min+":"+sec);
  if(hour<=12){
    c2=String(hour+":"+min+":"+sec);
    // console.log(c2);
  }
  else{
    c2=String(hour-12+":"+min+":"+sec);
  }
  
  console.log(c1);
  console.log(c2);
  
}
setInterval(Current,1000);

