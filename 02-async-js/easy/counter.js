function counter(n){
    for (let i = 0; i < n; i++) {const element = [i];
        setTimeout(()=>{
            console.log(i+1)
        },i*1000);
    }
}
counter(5)