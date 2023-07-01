function filterArray(arr,callback){

    const newArr = arr.filter(callback);

    return newArr;

}

const numbers = [1, 2, 3, 4, 5, 6];

function isEven(number) {
  return number % 2 === 0;
}

const newArr = filterArray(numbers,isEven);
console.log(newArr);