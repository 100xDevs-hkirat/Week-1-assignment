let count=0

function counter(n,count){

    if(n===count){
        return
    }else{
        console.log(count)
        setTimeout(()=>{
            counter(n,count+1)
        },1000)
    }
}
counter(10,0)