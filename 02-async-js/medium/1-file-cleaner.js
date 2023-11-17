// ## File cleaner
// Read a file, remove all the extra spaces and write it back to the same file.

// For example, if the file input was
// ```
// hello     world    my    name   is       raman
// ```

// After the program runs, the output should be

// ```
// hello world my name is raman
// ```

// ## Write to a file
// Using the fs library again, try to write to the contents of a file.
// You can use the fs library to as a black box, the goal is to understand async tasks.

const fs = require ('fs')
let fileData=''

function writeCallback(err)
{// meant for handling errors
  if(err) { console.log("handling error"+ err) }
}

function cleanData (rawData)
{
  let arr=rawData.split(' ');
  let answerArr= []
  for( let i =0; i< arr.length;i++)
    {
      if(arr[i].length>0){ answerArr.push(arr[i])}
    }
  answerArr= answerArr.join(' ')
  console.log(answerArr)
    return answerArr
}


function readFunction (err, data)
{
  if(err)
  {
    console.log("Cannot read file "+err)
    return
  }

    let cleanedFileData =cleanData(data);

  fs.writeFile('1.txt', cleanedFileData, 'utf8',writeCallback)
    console.log(fileData)
}
fs.readFile('1.txt', 'utf8' , readFunction)

// heavy synchronous task

let counter = 0;
for(let i=0;i<10000;i++)
{
    counter++;
}
console.log(counter)

