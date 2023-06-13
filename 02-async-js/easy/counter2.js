let count =0;
function counter(){
   count++;
   console.log(count);
   setTimeout(counter , 1000)
}
// for ( let i=0;i<10;i++){
//     setTimeout(counter , 2000)
// }
counter();