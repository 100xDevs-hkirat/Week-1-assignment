/*
Counter without setInterval

Without using setInterval, try to code a counter in Javascript.
*/

let counter = 0;

function f() {
    setTimeout(() => {
        counter += 1;
        console.clear();
        console.log(counter);
        f();
    }, 1000);
}

f();