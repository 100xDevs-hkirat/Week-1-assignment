let now = new Date()
let hr = now.getHours()
let mm = now.getMinutes()
let s = now.getSeconds()
setInterval(function(){
    s+=1;
    if(s>60){
        s=0
        mm+=1
    }
    if(mm>60){
        hr+=1
        mm=0
    }
    if(hr>24){
        hr=0
    }
    if(hr<12){
        console.log(hr,":",mm,":",s,"AM")
    }
    else{
        console.log(hr,":",mm,":",s,"PM")
    }
    
},1*1000)
