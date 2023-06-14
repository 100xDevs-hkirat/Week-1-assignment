
let count=0

function counter(n){

    const interval=setInterval(()=>{
        if(counter===count){
            clearInterval(interval)
        }else{
            console.log(count)
            count+=1
        }

    },1000)
}
counter(10)
