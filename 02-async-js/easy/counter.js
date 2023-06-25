let i = 0;
// function call(){
//     console.clear();
//     i++;
//     console.log(i);
// }
// setInterval(call,1000);
function call(cc){
    console.log(i);
    clearTimeout(cc);
    i++;
    var c = setTimeout(call,2000,c);
}
call();