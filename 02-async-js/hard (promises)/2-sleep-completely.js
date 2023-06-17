/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 */

function sleep(seconds) {
	const functionStartTime = new Date()
	let loopStartTime = new Date();
    
    while((loopStartTime.getTime() - functionStartTime.getTime())/1000 < seconds){
        loopStartTime = new Date();
        
    }
}

console.log("sleep mode started");
sleep(5);
console.log("sleep mode ended");
