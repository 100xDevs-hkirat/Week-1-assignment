
// function mapArray(arr,callback){
//     //for loop or for each
//     newArr =[];
//     function xyz(element,index,array){
//         newArr[index] = callback(array[index]);
//     }

//     arr.forEach(xyz);
    

//     //return 
//     return newArr;
// }

// //test it
// testArr= [1,2,3,4];

// function add(element){
//    return element+1;
// }


// newArr =mapArray(testArr,add);
// console.log(newArr);


//using map function in javascript

function mapArray(arr,callback){

    function xyz(element,index,array){
        return callback(array[index]);
     }
        
    return arr.map(xyz);
}

// //test it
testArr= [1,2,3,4];

function add(element){
   return element+1;
}


newArr =mapArray(testArr,add);
console.log(newArr);