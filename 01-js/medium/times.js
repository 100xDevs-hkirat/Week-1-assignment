function calculateTime(n) {
  var startTime=new Date();
  var sum=0;
  for(var i=0;i<=n;i++){
    sum +=i;
  }
  var endTime=new Date();
  
    return Math.abs(endTime.getTime()-startTime.getTime())/1000;
}

var final_ans=calculateTime(10000000)
console.log(final_ans);

