---
title: JavaScript Async/Await
date: "2025-05-31"
description: Introduction to JavaScript's async and await keywords.
tags: ["JavaScript", "Advanced", "Async"]
skillLevel: +++
---

In JavaScript async and await are keywords that allow us to make asynchronous code read and execute synchronously.  Async and await are interchangeable with promises since they translate into promises under the hood.  We'll talk more about that in a future post.  For now let's try to understand the nature of synchronous vs asynchronous programming.

### Synchronous vs Asynchronous

Let's define a few functions and run them in an IIFE (immediately invoked function expression).  Here the IIFE is helpful so that in a later example we can run the same code in an async context.

```js
function funcOne() {
  console.log("One!");
}

function funcTwo() {
  console.log("Two!");
}

// Here is our IIFE.
// It's just a function that 
// gets invoked right after it's defined.
(() => {
  console.log("Result:");
  funcOne();
  funcTwo();
})();

// Result:
// One!
// Two!
```

As you can see, this code runs synchronously, as in `funcOne` runs and then `funcTwo` runs once `funcOne` has completed running.  Now let's look at an asynchronous example where we will simulate a call to an api which takes a variable amount of time to complete.  In this case we need to tell our code how to handle this operation:

```js
const mockFetch = (wait) => {
  // Simulate a call to an external service
  // which takes a variable amount of time to complete.
  return new Promise(
		(resolve) => setTimeout(resolve, wait)
	);
};

function funcOne() {
  mockFetch(1);
  console.log("One!");
}

function funcTwo() {
  console.log("Two!");
}

(() => {
  console.log("Result:");
  funcOne();
  funcTwo();
})();

// Result:
// One!
// Two!
```

Here the result is the same since we didn't tell our code to wait for the `mockFetch` function to complete before continuing on.  Instead, we called the mock fetch function and while it was running, we called the next function.  Let's look at another way we could write this logic:

```js
const mockFetch = (wait) => {
  return new Promise(
		(resolve) => setTimeout(resolve, wait)
	);
};

async function funcOne() {
	// Let's wait for mockFetch to complete running
	// We can do this with the await keyword
  await mockFetch(1);
  console.log("One!");
}

function funcTwo() {
  console.log("Two!");
}

(() => {
  console.log("Result:");
  funcOne();
  funcTwo();
})();

// Result:
// Two!
// One!
```

Now the second function logs before the first function since we told our code to wait for the mock api call to complete before logging to the console.  That's cool, but what if we wanted to enforce that the functions run and complete in the order that we've called them?  Let's add another `await` to achieve this.

```js
const mockFetch = (wait) => {
  return new Promise(
		(resolve) => setTimeout(resolve, wait)
	);
};

async function funcOne() {
  await mockFetch(1);
  console.log("One!");
}

function funcTwo() {
  console.log("Two!");
}

(async () => {
  console.log("Result:");
  await funcOne(); // Add an await here
  funcTwo();
})();

// Result:
// One!
// Two!
```

Now if we await `funcOne`, we know that it will complete running before the next function starts to run.  We also know that our mock api call will run and complete before `funcTwo` starts running.  Here we have turned asynchronous non-blocking code into synchronous blocking code.  

Although there's more to understand about async and await, hopefully this post helps to illuminate how they can be used to make JavaScript more flexible and readable.