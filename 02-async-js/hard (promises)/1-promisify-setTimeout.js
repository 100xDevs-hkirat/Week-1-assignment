/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/
let myPromise= new Promise(function(resolve){
     setTimeout(function(){resolve("akul is king")},2000);
}
)

function wait(n) {
    console.log("gardern is beautiful");
}

myPromise.then(
    function(value){
        console.log(value);
    }
    )

wait();
