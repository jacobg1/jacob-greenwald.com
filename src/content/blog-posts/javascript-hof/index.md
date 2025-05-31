---
title: JavaScript HOF
date: "2025-05-28"
description: Higher order functions in JavaScript.
postOrder: 3
tags: ["JavaScript", "Advanced"]
skillLevel: +++
---

Higher order functions are functions that take in another function as an argument.  These can be used to abstract helpful logic for re-use and help us write and compose better code.

### Simple Example

Let's look at a simple example.  You can write/run this code yourself if you want, just follow this post on how to <a href="/blog/installing-javascript/" target="_blank">install NodeJS</a> and this post on how to <a href="/blog/running-javascript/" target="_blank">run it</a>.

```js
function timesTwo(input) {
	return input * 2;
}

function myFunction(input, func) {
	return func(input);
}

const result = myFunction(2, timesTwo);

console.log(result) // -> 4
```

Great, now you've broken out part of your logic into a re-usable function which could be used in other places if needed.  You can also add more logic without having to change both functions which can be helpful if you're working on a bigger project.  Less changes means less testing and less room for bugs.  For example:

```js
function timesTwo(input) {
	return input * 2;
}

function timesTwoAgain(input, func) {
	const num = input * 2;
	return func(num);
}

const result = timesTwoAgain(2, timesTwo);

console.log(result); // -> 8
```

### Built-in higher order functions

JavaScript has a bunch of built in higher order functions as well that can be super helpful.  Let's take a look!

#### Map

JavaScript's `.map()` higher order function returns a new array without mutating the original.

```js
const statements = ["nice", "wow cool", "awesome"];

const exclaim = statements.map((statement) => {
	return `${statement}!`;
});

console.log(exclaim);
// -> [ 'nice!', 'wow cool!', 'awesome!' ]

```

OR

```js
const statements = ["nice", "wow cool", "awesome"];

function makeExclaim(statement) {
	return `${statement}!`;
}

const exclaim = statements.map(makeExclaim);

console.log(exclaim);
// -> [ 'nice!', 'wow cool!', 'awesome!' ]
```

Above you can see how we pass a function as an argument into `.map()` and it runs that function against each item in the array.

#### Reduce

JavaScript's `.reduce()` higher order function is similar, in some ways, to `.map()` but allows us to create more advanced functionality. 

```js
const statements = [
	{ niceness: 100, text: "nice" },
	{ niceness: 50, text: "wow cool" },
	{ niceness: 20, text: "awesome" }
];

const conditionalExclaim = statements.reduce((acc, curr) => {
	if (curr.niceness >= 50 ) {
		return [...acc, `${curr.text}!`];
	}

	return acc;
}, []);

console.log(conditionalExclaim);
// -> [ 'nice!', 'wow cool!' ]

```

Here we've filtered and formatted a list of items but we've only looped through the list one single time.

#### And more

There's plenty more higher order functions for JavaScript out there as well, `.filter()`, `.forEach()`, `.some()`, and more! Check them out when you have a chance and enjoy cleaner, more re-usable code.