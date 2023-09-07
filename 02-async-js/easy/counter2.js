let count = 1;

function stopWatch(){
    console.clear();
    console.log(count);
    count = count + 1;
}

for(let i=1;i<=100000;i++){
    setTimeout(stopWatch, i*1000);
}