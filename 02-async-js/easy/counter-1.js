let count = 0;
const counterBody = () => {
    console.log(count);
    count ++;
}

const counter = () => {
    console.log("Starting the counter :) ");
    setInterval(counterBody, 1 * 1000);
}

counter()