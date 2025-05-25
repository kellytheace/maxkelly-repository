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

  // Method to run the solution (for debugging purposes)
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
