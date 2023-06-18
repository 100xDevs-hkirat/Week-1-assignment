let count =0;

const counter = ()=>{
    
    console.clear();
    console.log(count);
    count+=1;
    setTimeout(counter, 1000);
}

counter();