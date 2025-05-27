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

// Instances of the class
const eulerSolutions = [
  new EulerProblem(
    1,
    "Multiples of 3 and 5",
    "Find the sum of all the multiples of 3 or 5 below 1000.",
    `result=0
for i in range (1,1000):
    if i%3 == 0 or i%5 == 0:
        result=result+i
print(result)`
  ),
  new EulerProblem(
    2,
    "Even Fibonacci numbers",
    "By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.",
    `let a = 1, b = 2, sum = 0;
while (b < 4000000) {
  if (b % 2 === 0) sum += b;
  [a, b] = [b, a + b];
}
console.log(sum);`
  )
];
