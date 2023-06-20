let count = 1;
function counter() {
    console.clear();
    console.log(count);
    count += 1;
    setTimeout(counter, 1000); // better way
}

// it will stop from certain specified period

// for (let i = 0; i < 10; i++) {
//     setTimeout(counter, (i+1) * 1000);
// }

setTimeout(counter, 1000);