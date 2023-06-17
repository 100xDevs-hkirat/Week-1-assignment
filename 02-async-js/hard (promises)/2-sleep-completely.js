/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 */

function sleep (seconds) {
    start = new Date().getTime()
    do{
        end=new Date().getTime()
    }while(end-start<=(seconds*1000))
}
sleep(5)