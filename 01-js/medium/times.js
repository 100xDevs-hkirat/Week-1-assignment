function calculateTime(n) {
    let startTime= new Date()
    let sum =0;
    for(i=1; i<=n; i++)
    {
        sum+= i;

    }

    let endTime= new Date();
    const timeTaken= (endTime - startTime)/1000
    return timeTaken;
}



console.log(calculateTime(100000000))