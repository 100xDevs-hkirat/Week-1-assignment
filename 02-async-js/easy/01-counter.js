let counter = 0; //variable which holds the count value

//function which increaments counter and prints it in console
function increamentcounter(){
    counter++;
    console.log(counter);
}

//setInterval call the increamentcounter after 1 sec
setInterval(increamentcounter,1000);