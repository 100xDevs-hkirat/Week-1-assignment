let count = 0;
const callback = () => {
    console.clear();
    console.log(`${count} seconds passed :)`);
    count ++ ;
    setTimeout(callback, 1 * 1000)
}

const counter = () => {
    console.log("Starting the Counter :)");
    setTimeout(callback, 0 * 1000);
}

counter()