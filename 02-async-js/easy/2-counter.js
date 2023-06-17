let counter = 0;
function count(){
    counter+=1;
    console.log(counter)
    setTimeout(count,1*10000)
}
count()