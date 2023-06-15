# 100x Dev FullStack Development Course 

### 15 To Keep In Mind
* No rush
* Goal
* Focus on fundamental
* Cut the noise
* Fail but fail better
* Don't take a break
* This is a Conventional course
* Don't fear
* Get Stuck ?
* Don't leave things
* Tech run in cycle
* Content is there, Context is missing
* Speed is not as important as strength


## Week 1
### Basic of Java Script


### Callbacks, Promises, Async/await, Event loop

* [What is event loop](https://www.youtube.com/watch?v=8aGhZQkoFbQ)
* [Asynchronous JavaScript Crash Course](https://www.youtube.com/watch?v=exBgWAIeIeg)


### Extras 
* http://latentflip.com/loupe to view js stack


## Week 1 Assignment

The project contains easy, medium and hard assigments for week 1.
- 01-js contains assignments related to JavaScript, things that were covered in the first class.
    - [Java Script 101](./Week_01_-_JS_Basics_and_Async/01-js/README.md).

- 02-async-js contains assignments related to asynchronous JavaScript, things that were covered in the second class.
    - [Asynchronous Java Script](./Week_01_-_JS_Basics_and_Async/02-async-js/README.md).

#### Run Script & Tests

```
\Week_01_-_JS_Basics_and_Async\01-js> node  .\easy\anagram.js
\Week_01_-_JS_Basics_and_Async\01-js> node  .\easy\expenditure-analysis.test.js
true

\Week_01_-_JS_Basics_and_Async\01-js> npx jest ./tests/anagram.test.js
\Week_01_-_JS_Basics_and_Async\01-js> npx jest ./tests/expenditure-analysis.test.js


```



### Date Time Function Java Script
```
function timeDifference(date1,date2) {
    var difference = date1.getTime() - date2.getTime();

    var daysDifference = Math.floor(difference/1000/60/60/24);
    difference -= daysDifference*1000*60*60*24

    var hoursDifference = Math.floor(difference/1000/60/60);
    difference -= hoursDifference*1000*60*60

    var minutesDifference = Math.floor(difference/1000/60);
    difference -= minutesDifference*1000*60

    var secondsDifference = Math.floor(difference/1000);

    console.log('difference = ' + 
      daysDifference + ' day/s ' + 
      hoursDifference + ' hour/s ' + 
      minutesDifference + ' minute/s ' + 
      secondsDifference + ' second/s ');
}
```