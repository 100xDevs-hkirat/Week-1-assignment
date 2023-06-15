/*
  Create a counter in JavaScript
  We have already covered this in the second lesson, but as an easy recap try to code a counter in Javascript
  It should go up as time goes by in intervals of 1 second
*/

let cnt = 0

function printNum() {
  console.clear()
  console.log(cnt)
  cnt += 1
}

setInterval(printNum,1000)