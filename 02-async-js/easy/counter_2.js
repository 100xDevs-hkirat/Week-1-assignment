let counter = 0; 

function counters(){
    setTimeout(()=>{
        counter +=1
        console.log(counter)
        counters()
    },1000)
}
counters()


