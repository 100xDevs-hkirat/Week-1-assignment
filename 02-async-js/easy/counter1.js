let count = 1;

function countFunction(){
    console.clear();
    console.log(count);
    count = count + 1;
}

setInterval(countFunction, 1*1000);