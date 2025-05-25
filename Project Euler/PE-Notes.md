# Project Euler

## Introduction
Project Euler is a collection of challenging mathematical and computational problems designed to encourage creative problem solving with programming. The problems often involve number theory, combinatorics, and algorithms.

## Site Architecture
All of the Project Euler problems and their solutions are stored in a separate JavaScript file (`Euler-Data.js`) as a structured array of objects. Each object includes properties like the problem `number`, `title`, `description`, and the actual code solution.

When the page loads, a JavaScript function reads this data and populates the page dynamically using the DOM (Document Object Model). There's a search input field at the top of the page that listens for user input — as the user types a problem number or keyword, JavaScript filters the array in real time and re-renders only the matching solutions.

This dynamic filtering and rendering is done entirely in the browser using native JavaScript methods like `.filter()` and `.forEach()`. No page reloads are necessary, and all interaction happens instantly on the client side. This makes the site fast, simple, and easy to host on GitHub Pages, since there’s no need for a server or database to serve the content.

## HTML Line by Line explanation

testing

### Full code

test1

### Line-by-line explanation

test2

## JS Line by Line explanation

This JavaScript code defines a class called `EulerProblem` to represent individual Project Euler problems in a structured, reusable way. Instead of using plain objects, object-oriented programming (OOP) is used to organize the data and behavior.

Each Euler problem is represented as an instance (an object) of the EulerProblem class. The class holds the problem number, title, description, and the solution code. The class also has methods:

`display()` to return a nicely formatted string with all the problem details.

`log()` to print that string to the browser console (for debugging).

Finally, the `eulerSolutions` array stores multiple problem instances, which makes it easy to loop through them, display them, filter them, etc.

### Full code

```javascript
class EulerProblem {
  constructor(number, title, description, solutionCode) {
    this.number = number;
    this.title = title;
    this.description = description;
    this.solutionCode = solutionCode;
  }

  display() {
    return `
      Problem ${this.number}: ${this.title}
      ${this.description}
      
      Code:
      ${this.solutionCode}
    `;
  }

  // Method to run the solution (for de-bugging)
  log() {
    console.log(this.display());
  }
}

// Now use instances of the class
const eulerSolutions = [
  new EulerProblem(
    1,
    "Multiples of 3 and 5",
    "Find the sum of all the multiples of 3 or 5 below 1000.",
    `let sum = 0;
for (let i = 0; i < 1000; i++) {
  if (i % 3 === 0 || i % 5 === 0) {
    sum += i;
  }
}
console.log(sum);`
  ),
  new EulerProblem(
    2,
    "Even Fibonacci numbers",
    "Sum the even-valued terms of the Fibonacci sequence below 4 million.",
    `let a = 1, b = 2, sum = 0;
while (b < 4000000) {
  if (b % 2 === 0) sum += b;
  [a, b] = [b, a + b];
}
console.log(sum);`
  )
];
```

### Line-by-line explanation

```javascript
class EulerProblem {
```

Defines a new class called EulerProblem. A class is a template for creating structured objects (each representing one problem).

```javascript
constructor(number, title, description, solutionCode) {
```

This is the constructor function. It's automatically called whenever you create a new EulerProblem object. The four inputs are used to set the object’s data.

```javascript
this.number = number;
    this.title = title;
    this.description = description;
    this.solutionCode = solutionCode;
```

Each of these lines saves the inputs into the object’s properties (so each object remembers its own number, title, etc.).

```javascript
 display() {
```

Defines a method called display() that you can call on an EulerProblem object.

```javascript
display() {
return `
      Problem ${this.number}: ${this.title}
      ${this.description}
      
      Code:
      ${this.solutionCode}
    `;
```

This returns a formatted multi-line string with all the details of the problem. ${...} is how you insert variables inside a template string (called template literals).

```javascript
log() {
    console.log(this.display());
  }
```

This method logs the formatted output to the console by calling the display() method.

```javascript
const eulerSolutions = [
```

Creates an array called eulerSolutions to hold all the problem objects.

```javascript
new EulerProblem(
    1,
    "Multiples of 3 and 5",
    "Find the sum of all the multiples of 3 or 5 below 1000.",
    `let sum = 0;
for (let i = 0; i < 1000; i++) {
  if (i % 3 === 0 || i % 5 === 0) {
    sum += i;
  }
}
console.log(sum);`
  ),
```

Creates an object for Problem 1 by calling the class constructor with all the needed data. The fourth argument is the actual JavaScript code as a string.
