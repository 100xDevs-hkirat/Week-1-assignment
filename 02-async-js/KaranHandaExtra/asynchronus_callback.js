function getDayOfMonth(){
    const date = new Date();

    return date.getUTCDate();
}

function higherOrderAsync(callback){
    setTimeout(callback,getDayOfMonth *1000);
}

function print(){
    console.log("sucess");
}

higherOrderAsync(print);