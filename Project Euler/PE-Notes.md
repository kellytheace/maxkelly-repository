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
lorem ipsum dolor sit amet
