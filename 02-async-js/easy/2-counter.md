## Counter without setInterval

Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.

function Timer(n)
{
var counter=1;

for(var i=0;i<n;i++)
{
    setTimeout(()=>{ 
        console.log(counter)
        counter++;
        },n*1000)
}
}


