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




## Week 0 | Orientation class

## Week 1.1 | Recapping Pre requisites, Basics of JS

## Week 1.1 - Recapping Pre requisites, Basics of JS, Some async JS

## Week 1.2 | Extra class for JS

## Week 1.3 | Async, await, callbacks, promises (Zoom upload)

## Week 1.3 | Async, await, callbacks, promises

How to solve an assignment?

## Week 1.3 - Assignment

## Week 1.4 | Extra class - Git and Assignments

## Week 1.4 | Extra class on Git/Github/Assignments

Assignment 1 - Solution

## Week 2.1 | Express, Node.js, Intro to backend systems

## Week 2.1 | Node.js, Backend systems and HTTP Servers

## Week 2.2 | Middlewares, request and responses

## Week 2.3 | Assignment

## Week 3.1 | Finishing Backend in JS
Live at: 24 Jun 2023, 07:00 PM

## Week 3.1 | Assignment

## Week 3.2 | Basics of HTML, CSS, Introducing React
Live at: 25 Jun 2023, 07:00 PM

## Week 4.1 | React deep dive, Introducing components
Live at: 1 Jul 2023, 07:00 PM

## Week 4.2 | Rendering, props and context in React
Live at: 2 Jul 2023, 07:00 PM

## Week 4.3 | Assignment

## Week 5.1 | Intro to state management
Live at: 8 Jul 2023, 07:00 PM

## Week 5.2 | Completing state management
Live at: 9 Jul 2023, 07:00 PM

## Week 5.3 | Assignment

## Week 6.1 | Introducing Typescript, moving Backend to TS
Live at: 15 Jul 2023, 07:00 PM

## Week 6.2 | Deeper dive into typescript, Moving the frontend to TS
Live at: 16 Jul 2023, 07:00 PM

## Week 6.3 | Assignment 1 - Frontend

## Week 6.4 | Assignment 2 - Backend

## Week 7.1 | Understanding mono repos, introducing frameworks
Live at: 22 Jul 2023, 07:00 PM

## Week 7.2 | CI/CD in full stack projects
Live at: 23 Jul 2023, 07:00 PM

## Week 7.3 | Assignment

## Week 8.1 | Let's dive into open source
Live at: 29 Jul 2023, 07:00 PM

## Week 8.2 | Forking and solving issue #1
Live at: 30 Jul 2023, 07:00 PM

## Week 8.3 | Assignment 1 - Open source issue #1

## Week 8.4 | Assignment 2 - Open source issue #2

## Week 9.1 | Diving deeper into the fork, understanding the frontend of the fork
Live at: 5 Aug 2023, 07:00 PM

## Week 9.2 | Diving into the main repository
Live at: 6 Aug 2023, 07:00 PM

## Week 9.3 | Assignment 1 - Open source issue #1

## Week 9.4 | Assignment 2 - Open source issue #2

## Week 10.1 | Real time open source contribution to the main open source repo
Live at: 12 Aug 2023, 07:00 PM

## Week 10.2 | Making students go through open source issues in real time
Live at: 13 Aug 2023, 07:00 PM

## Week 10.3 | Open source issue in main repo

Unofficial Late night Session - Writing a discord bot to validate users

Certificate of Completion

## Week 11.1 - Open source contributions in project #2
Live at: 19 Aug 2023, 07:00 PM

## Week 11.2 | Open source contributions in project #2 - Part 2
Live at: 21 Aug 2023, 01:30 PM

