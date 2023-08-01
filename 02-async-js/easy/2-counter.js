// ## Counter without setInterval
// Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.

function waitOneSecond()
{
    return new Promise((resolve) =>{
        setTimeout(resolve, 1000);
    });
}

export async function counter2Promise(interval)
{
    for(let i = 0; i<interval; i++)
    {
        console.log(i);
        await waitOneSecond();
    }

}


export function counter2Recursive(interval, index = 1)
{
    if(index <= interval)
    {
        console.log(index);
        setTimeout(() => {
            counter2Recursive(interval, index+1);
        }, 1000); 
    }
}
