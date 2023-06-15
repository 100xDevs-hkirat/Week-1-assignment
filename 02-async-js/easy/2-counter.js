
let counter = 0;

for(let i =0; i<100;i++){
    setTimeout(()=>{
        console.clear()
        console.log(counter)
        counter += i
    },1000)
}
