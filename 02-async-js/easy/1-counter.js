function counter1(){
    let cnt = 1;
    // Understood that arrow functions don't require you to pass the variables as parameters as they will directly access
    // the variable that is required inside the function from the outer scope to manipulate it's value/use.
    setInterval(() => {
        console.clear();
        console.log(cnt + " seconds");
        cnt+=1;
    },1000);
}

counter1();