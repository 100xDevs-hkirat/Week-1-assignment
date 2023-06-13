//counter without set timeout

var counterVal = 0;

const counter =(counterVal)=>{
    if (counterVal>=0){
        setTimeout(()=>{
            console.clear();
            console.log(counterVal);
            counterVal++;
            counter(counterVal);
        },1000);
    }
}

counter(counterVal);