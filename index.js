import isAnagram from "./01-js/easy/anagram.js";
import Calculator from "./01-js/hard/calculator.js";
import Todo from "./01-js/hard/todo-list.js";
import startCounter from "./02-async-js/easy/1-counter.js";
import { counter2Promise, counter2Recursive } from "./02-async-js/easy/2-counter.js";
import wait from "./02-async-js/hard (promises)/1-promisify-setTimeout.js";
import { harmfulSleep, sleep } from "./02-async-js/hard (promises)/2-sleep-completely.js";




// anagram problem
console.log("\n isAnagram(awpar, pawar) -> " + isAnagram("awpar", "pawar"));
console.log("isAnagram(awpar, pawat) -> " + isAnagram("awpar", "pawat"));


// Calculator problem (Hard)
let math1 = new Calculator();
const expression = `10 +   2 *    (   6 - (4 + 1) / 2) + 7`;
math1.calculate(expression);
console.log("ans of Expression -> " + math1.getResult());
console.log("/n");



// todo app
console.log("\n");

let myTodo = new Todo();
myTodo.add("Complete This assignment");
myTodo.add("Solve map and hashing questions");
myTodo.getAll();
// myTodo.clear();
myTodo.removeFirst();
myTodo.getAll();


// this both counter 1 and 2 execute simultaneously 
// counter clock
console.log("\n");
startCounter(4);

// counter 2
console.log("\n");
counter2Recursive(4);
// counter2Promise(4);

// readfile
// console.log("\nRead Readme file ->");
// readFromFile();


// wait function
console.log("\n");

wait(5).then((msg)=>{
    console.log(msg);
}).catch(()=>{
    console.log("waiting failure");
})


// implementing sleep function
async function halt(n)
{
    console.log("sleep start");
    // await sleep(n);
    await harmfulSleep(n);
    console.log("sleep end \n");
}
halt(3);


