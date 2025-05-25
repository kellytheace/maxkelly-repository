# Project Euler

## Introduction
Project Euler is a collection of challenging mathematical and computational problems designed to encourage creative problem solving with programming. The problems involve number theory, combinatorics, or algorithms.

## Site Architecture
All of the Project Euler problems and their solutions are stored in a separate JavaScript file (`Euler-Data.js`) as a structured array of objects. Each object includes properties like the problem `number`, `title`, `description`, and the actual code solution.

When the page loads, a JavaScript function reads this data and populates the page dynamically using the DOM (Document Object Model). There's a search input field at the top of the page that listens for user input — as the user types a problem number or keyword, JavaScript filters the array in real time and re-renders only the matching solutions.

This dynamic filtering and rendering is done entirely in the browser using native JavaScript methods like `.filter()` and `.forEach()`. No page reloads are necessary, and all interaction happens instantly on the client side. This makes the site fast, simple, and easy to host on GitHub Pages, since there’s no need for a server or database to serve the content.

## HTML Line by Line explanation
lorem ipsum dolor sit amet

## JS Line by Line explanation

This JavaScript code defines a class called `EulerProblem` to represent individual Project Euler problems in a structured, reusable way. Instead of using plain objects, object-oriented programming (OOP) is used to organize the data and behavior.

Each Euler problem is represented as an instance (an object) of the EulerProblem class. The class holds the problem number, title, description, and the solution code. The class also has methods:

`display()` to return a nicely formatted string with all the problem details.

`log()` to print that string to the browser console.

Finally, the `eulerSolutions` array stores multiple problem instances, which makes it easy to loop through them, display them, filter them, etc.

### Class Definition

```javascript
class EulerProblem {
```

Defines a new class called EulerProblem. Think of a class as a template for creating structured objects (each representing one problem).

```constructor(number, title, description, solutionCode) {
```

test
