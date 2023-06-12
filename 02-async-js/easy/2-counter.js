let timeoutId;

const counter = (n) =>{
    if(!n){
        n = 0
    }

    clearTimeout(timeoutId)

    console.log(n)

    timeoutId = setTimeout(()=>{
        console.clear()
        counter(n+1)
    },1000)
}

counter()