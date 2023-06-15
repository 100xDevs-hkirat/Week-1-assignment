// Counter without setInterval

// Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.


var cnt = 0;

function counter(){
    cnt++;
    console.clear();
    console.log(cnt);
    setTimeout(counter, 1000);
}

counter();