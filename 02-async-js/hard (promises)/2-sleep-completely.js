/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 */

function sleep(seconds) {
  let date = new Date();
  //   let hrs = date.getHours();
  let min = date.getMinutes();
  let secondsInDate = date.getSeconds();
  let blockTime = seconds + secondsInDate;
  if (blockTime > 60) {
    blockTime = blockTime - 60;
    // let newMinute = min + 1;
    // // if (newMinute > 60) {
    // //   let newHrs = hrs + 1;
    // //   newMinute = newMinute - 60;
    // //   if (newHrs > 24) {
    // //     sleep(seconds);
    // //   }
    min = min + 1;
  }
  date = new Date();
  while (
    !(
      // date.getHours() === hrs &&
      (date.getMinutes() === min && date.getSeconds() === blockTime)
    )
  ) {
    date = new Date();
    // console.log(secondsInDate);
    // console.log(blockTime);
  }
}
// setTimeout(() => {
//   console.log("block");
// }, 5000);
// sleep(5);
