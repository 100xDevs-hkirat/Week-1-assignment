## Reading the contents of a file

Write code to read contents of a file and print it to the console. 
You can use the fs library to as a black box, the goal is to understand async tasks. 
Try to do an expensive operation below the file read and see how it affects the output. 
Make the expensive operation more and more expensive and see how it affects the output. 

I get that performing an expensive task after readFile makes it so that first the synchronous code that is running of the single thread is completed only then the async task output is logged. Even if there are two expensive task , only after both are completed did the async output is logged.
