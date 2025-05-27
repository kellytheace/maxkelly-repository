class EulerProblem {
  constructor(number, title, description, solutionCode) {
    this.number = number;
    this.title = title;
    this.description = description;
    this.solutionCode = solutionCode;
    this.result = result;
  }

  display() {
    return `
      Problem ${this.number}: ${this.title}
      ${this.description}
      
      Solution Code:
      ${this.solutionCode}
      
      Result:
      ${this.result}
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
print(result)`,
    "233168"
  ),
  new EulerProblem(
    2,
    "Even Fibonacci numbers",
    "By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.",
    `n1=1
n2=1
n3=n2+n1
arr=[1,2]
result=0
while n1<4000000:
    n1=n2+n3
    n2=n3
    n3=n1
    arr.append(n1)

for i in arr:
    if i%2==0:
        result=result+i
print('result is ', result)`,
    "4613732"
  )
];
