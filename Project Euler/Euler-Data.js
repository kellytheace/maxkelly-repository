const eulerSolutions = [
  {
    number: 1,
    title: "Multiples of 3 and 5",
    description: "Find the sum of all the multiples of 3 or 5 below 1000.",
    solution: `let sum = 0;
for (let i = 0; i < 1000; i++) {
  if (i % 3 === 0 || i % 5 === 0) {
    sum += i;
  }
}
console.log(sum);`
  },
  {
    number: 2,
    title: "Even Fibonacci numbers",
    description: "Sum the even-valued terms of the Fibonacci sequence below 4 million.",
    solution: `let a = 1, b = 2, sum = 0;
while (b < 4000000) {
  if (b % 2 === 0) sum += b;
  [a, b] = [b, a + b];
}
console.log(sum);`
  }
];
