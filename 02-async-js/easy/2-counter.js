// ## Counter without setInterval

// Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.


function counter(){
    let count =0;

    function updateCount(){
        console.clear();
        count++;
        console.log(count)
        setTimeout(updateCount, 1000);
    }
    updateCount();
}









































































// (Hint: setTimeout)