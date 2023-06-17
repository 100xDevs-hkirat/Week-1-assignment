// <!-- ## Create a counter in JavaScript

// We have already covered this in the second lesson, but as an easy recap try to code a counter in Javascript
// It should go up as time goes by in intervals of 1 second -->
let count=0;
function counter(){
    console.clear();
console.log(count+1);
count++;
}
const Result=setInterval(counter,1000);
setTimeout(function(){
    clearInterval(Result);
},10000);