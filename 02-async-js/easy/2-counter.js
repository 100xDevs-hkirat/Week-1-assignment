/*
  Counter without setInterval
  Without using setInterval, try to code a counter in Javascript.
*/

let cnt = 0;

function counter() {
    setTimeout(() => {
        console.clear();

        cnt += 1;
        console.log(cnt);

        counter();
        
    }, 1000);
}

counter();