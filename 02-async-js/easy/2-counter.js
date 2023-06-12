
let counter = 0;
const printTime = () => {
    check = true;
    counter++;
    console.clear();
    console.log(counter);
    callTime();
}

const callTime= () => {
    setTimeout(printTime, 1000);
}

callTime();