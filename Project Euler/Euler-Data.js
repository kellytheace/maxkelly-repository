class EulerProblem {
  constructor(number, title, description, tags, solutionCode, result) {
    this.number = number;
    this.title = title;
    this.description = description;
    this.tags = tags;
    this.solutionCode = solutionCode;
    this.result = result;
  }

  display() {
    return `
      Problem ${this.number}: ${this.title}
      ${this.description}

      Tags: ${this.tags.join(', ')}
      
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
    ["divisibility"],
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
    ["divisibility", "fibonacci"],
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
  ),
  new EulerProblem(
    3,
    "Largest Prime Factor",
    "What is the largest prime factor of the number 600851475143?",
    ["factorisation","prime-number"],
    `num=600851475143
arr=[]
while num>1:
    for i in range (2,num+1):
        if num%i==0:
            num=num//i
            arr.append(i)
            break
print(max(arr))`,
    "6857"
  ),
  new EulerProblem(
    4,
    "Largest Palindrome Product",
    "Find the largest palindrome made from the product of two 3-digit numbers.",
    ["palindrome"],
    `def palindrome_check(n):
    return str(n) == str(n)[::-1]
arr=[]
for i in range(1,999+1):
    for j in range(1,999+1):
        x=i*j
        if palindrome_check(x)==True:
            arr.append(x)
print(max(arr))`,
    "906609"
  ),
  new EulerProblem(
    5,
    "Smallest Multiple",
    "What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?",
    ["divisibility","factorisation"],
    `import math

result = 1
for i in range(11, 21):
    result = math.lcm(result, i)

print(result)`,
    "232792560"
  ),
  new EulerProblem(
    6,
    "Sum Square Difference",
    "Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.",
    ["arithmetic-progression","sequence-summation"],
    `n1=0
n2=0
for i in range(1,100+1):
    n1=n1+(i**2)
    n2=n2+i
n2=n2**2
n3=n2-n1
print(n1)
print(n2)
print(n3)`,
    "25164150"
  ),
  new EulerProblem(
    7,
    "10,001st Prime",
    "What is the 10,001st prime number?",
    ["prime-number"],
    `arr=[2]
n1=3
def prime_check(n):
    iter = 0
    reqIter = n - 2
    for i in range(2,n):
        if n%i==0:
            return False
        else:
            iter += 1
            if iter==reqIter:
                arr.append(n)
                return True
    return True

while len(arr)<10001:
    prime_check(n1)
    n1+=1

print(max(arr))`,
    "104743"
  )
];
