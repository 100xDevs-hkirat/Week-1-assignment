// ## Counter without setInterval

// Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.

let count=0;
let result;
function counter(){
    console.clear();
    count++;
    console.log(count);
    result= setTimeout(counter,1000);
}

counter();
setTimeout(function(){
    clearTimeout(result)
},5000);



































































// (Hint: setTimeout)