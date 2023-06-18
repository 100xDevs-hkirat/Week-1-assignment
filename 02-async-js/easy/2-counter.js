/*
Code Author : MrDeepThought A.K.A IamArsh A.K.A Arshpreet Singh
Time : 12:25 15th June,2023
Problem : Counter-2
Description : To create a counter function that prints the time in seconds on the screen after every second without
              using the setInterval method of standard library in JS.
*/

function printCounter(cnt){
    console.clear();
    console.log(cnt + " seconds");
    cnt++;
    setTimeout(printCounter,1000,cnt);
}
function counter2(){
    let cnt = 1;
    setTimeout(printCounter,1000,cnt);
}
counter2();