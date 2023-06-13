
//Settimeout only runs for one time where as setInterverl will work infinate until broken 
function printInOneSecond(params) {
    console.log("Its been one second without setIntever");
}
setTimeout(printInOneSecond, 1000);