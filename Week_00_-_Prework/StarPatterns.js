console.log('Hello World from java Script')
console.log("----------------------------------")
console.log("Star Pattern Program In Javascript")
console.log("----------------------------------")
console.log("Square star pattern in javascript")

function SquareStar(size){
    let showString="";

    for(var i=1;i<=size;i++){
        for(var j=1; j<=size; j++){
            adder = "*"
            showString+=adder
        }
        console.log(showString)
        showString=""
        }
}
let size =5;
SquareStar(size)

console.log("------------------------------------------------------------------")
console.log("Hollow square pattern")
function HollowSquare(size){
    let showString="";

    for(var i=1;i<=size;i++){
        for(var j=1; j<=size; j++){
            if(i > 1 && i < size && j > 1 && j < size ){
                adder = " "
            }else {
                adder = "*"
            }
            showString+=adder
        }
        console.log(showString)
        showString=""
        }
}
HollowSquare(size)

console.log("------------------------------------------------------------------")
console.log("Right triangle star pattern")
function RightTriangle(size){
    let showString="";

    for(var i=1;i<=size;i++){
        for(var j=1; j<=size; j++){
            if(i +j <  size+1  ){
                adder = " "
            }else {
                adder = "*"
            }
            showString += adder
        }
        console.log(showString)
        showString=""
        }

}
RightTriangle(size)

console.log("------------------------------------------------------------------")
console.log("Left triangle star pattern")
function LeftTriangle(size){
    let showString="";

    for(var i=1;i<=size;i++){
        for(var j=1; j<=size; j++){
            if( i < j ){
                adder = " "
            }else {
                adder = "*"
            }
            showString += adder
        }
        console.log(showString)
        showString=""
    }
}
LeftTriangle(size)

console.log("------------------------------------------------------------------")
console.log("Downward triangle pattern")
function DownwardTriangle(size){
    let showString="";

    for(var i=1;i<=size;i++){
        for(var j=1; j<=size; j++){
            if( i < j ){
                adder = " "
            }else {
                adder = "*"
            }
            showString += adder
        }
        console.log(showString)
        showString=""
        }
}
DownwardTriangle(size)

console.log("------------------------------------------------------------------")
console.log("Hollow triangle pattern")
function HollowTriangle(size){

}
HollowTriangle(size)

console.log("------------------------------------------------------------------")
console.log("Pyramid star pattern in javascript")
function PyramidStar(size){

}
PyramidStar(size)

console.log("------------------------------------------------------------------")
console.log("Reversed pyramid star pattern")
function ReversedPyramid(size){

}
ReversedPyramid(size)

console.log("------------------------------------------------------------------")
console.log("Hollow pyramid star pattern")
function HollowPyramid(size){

}
HollowPyramid(size)

console.log("------------------------------------------------------------------")
console.log("Diamond pattern in javascript")
function DiamondPattern(size){

}
DiamondPattern(size)

console.log("------------------------------------------------------------------")
console.log("Hollow diamond pattern")
function HollowDiamond(size){

}
HollowDiamond(size)

console.log("------------------------------------------------------------------")
console.log("Hourglass star pattern")
function HourglassStar(size){

}
HourglassStar(size)

console.log("------------------------------------------------------------------")
console.log("Right Pascal star pattern")
function RightPascal(size){

}
RightPascal(size)

console.log("------------------------------------------------------------------")
console.log("Left Pascal star pattern")
function LeftPascal(size){

}
LeftPascal(size)

console.log("------------------------------------------------------------------")
console.log("Heart star pattern")
function HeartStar(size){

}
HeartStar(size)

console.log("------------------------------------------------------------------")

let name ='Rishi';
console.log(name)


let firstName, lastName ;
const interest = 21;
//interest =23;

console.log(interest)


// Primitives
// difference between null and undefined 

let myName = ' Rishi'
let age  = 21
let isMoron = true 
let isSmart = false
let education = undefined
let brains = null

console.log(' TYPE OF ')

// dynamic variables 
console.log(typeof brains);
brains = 22;
console.log(typeof brains);



// Objects 

let person ={
 myName : ' Rishi', 
 age  : 21, 
 isMoron : true , 
 isSmart : false, 
 education : undefined, 
 brains : null, 
}

console.log(person)
console.log(person.myName)    

// selecting property at runtime 

let personattribute = 'age';
console.log(person[personattribute])



// Arrays 

let selectColors =['red','green','blue']
console.log(selectColors[0])

selectColors[2]='green'
console.log(selectColors)


selectColors[4]=22
console.log(selectColors)



function myFunction (message) {
    console.log('Hello '+ message )
}

myFunction('John')



function patternPrinter (count){
    
    for (let i=0;i<count;i++){
        let stringPatterner = "*" 
        for (var j=0;j<i;j++){
            stringPatterner +="*"
        }
        console.log(stringPatterner)
    
    }
}




console.log("patternPrinter of "+ 5)
patternPrinter(5)


console.log("patternPrinter of "+ 9)
patternPrinter(9)




fibSeries = [0,1]

function fibNum( fibs ){

    if (fibs < 0) return  0;
        else 
    if (fibs ===0) return  0;
        else 
    if (fibs ===1 ) return 1;
        else
    { 
        var fibNumber = fibNum( fibs - 1) +  fibNum( fibs - 2)
      //  console.log(fibs+ "-----------"+fibNumber)
    return fibNumber
    }
    }
        
function fibPrinter(FibonacciNumber ){   
    for(var i=0;i<FibonacciNumber;i++)
        console.log(i+1 +"    -      " +fibNum(i))
    }
        

        

    console.log("Fibonacci of "+ 12)
    fibPrinter(12)
        
