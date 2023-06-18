


function Counter(){
   
    console.clear();
    let currDate = new Date();
    let timeIn24 = currDate.getHours()+':'+currDate.getMinutes()+':'+currDate.getSeconds();
    
    let hh=currDate.getHours() > 12 ? currDate.getHours()- 12: currDate.getHours();
    let mm=currDate.getMinutes();
    let ss =currDate.getSeconds();

    let ampm = currDate.getHours() > 12 ? 'PM':'AM';
    let timeIn12 = hh+':'+mm+':'+ss+ ` ${ampm}`;
    console.log(timeIn24);
    console.log(timeIn12);
    
}
setInterval(Counter, 1000);