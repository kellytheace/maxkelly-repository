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
  ),
  new EulerProblem(
    8,
    "Largest Product in a Series",
    "Find the thirteen adjacent digits in the 1000-digit number that have the greatest product. What is the value of this product?",
    ["other"],
    `import math

num_str = (
    "7316717653133062491922511967442657474235534919493496983520312774506326239578318016984801869
    47885184385861560789112949495459501737958331952853208805511125406987471585238630507156932909
    63295227443043557668966489504452445231617318564030987111217223831136222989342338030813533627
    66142828064444866452387493035890729629049156044077239071381051585930796086670172427121883998
    79790879227492190169972088809377665727333001053367881220235421809751254540594752243525849077
    11670556013604839586446706324415722155397536978179778461740649551492908625693219784686224828
    39722413756570560574902614079729686524145351004748216637048440319989000889524345065854122758
    86668811642717147992444292823086346567481391912316282458617866458359124566529476545682848912
    88314260769004224219022671055626321111109370544217506941658960408071984038509624554443629812
    30987879927244284909188845801561660979191338754992005240636899125607176060588611646710940507
    754100225698315520005593572972571636269561882670428252483600823257530420752963450"
)

digits = [int(d) for d in num_str]

max_product = 0
max_digits = []

for i in range(len(digits) - 13 + 1):
    segment = digits[i:i+13]
    if 0 in segment:
        continue
    product = math.prod(segment)
    if product > max_product:
        max_product = product
        max_digits = segment

print("Max product digits:", max_digits)
print("Max product:", max_product)`,
    "23514624000"
  ),
  new EulerProblem(
    9,
    "Special Pythagorean Triplet",
    "There exists exactly one Pythagorean triplet for which a+b+c=1000. Find the product abc.",
    ["pythagorean-triple"],
    `for a in range(1, 334):
    for b in range(a + 1, 1000 - a):
        c = 1000 - a - b
        if a*a + b*b == c*c:
            print(f"a={a}, b={b}, c={c}")
            print("Product abc =", a * b * c)
            break
    else:
        continue
    break`,
    "31875000"
  )
];
