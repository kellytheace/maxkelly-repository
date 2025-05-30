class EulerProblem {
  constructor(number, title, description, tags, solutionCode, result, imageUrl = null) {
    this.number = number;
    this.title = title;
    this.description = description;
    this.tags = tags;
    this.solutionCode = solutionCode;
    this.result = result;
    this.imageUrl = imageUrl;
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
    "a=200, b=375, c=425, 31875000"
  ),
  new EulerProblem(
    10,
    "Summation of Primes",
    "Find the sum of all the primes below two million.",
    ["prime-number"],
    `import math

arr=[2]
n1=3
arb=2

def prime_check(n):
    for i in range(2, int(math.sqrt(n)) + 1):
        if n % i == 0:
            return False
    return True

for i in range(n1,2000000+1,2):
    if prime_check(i)==True:
        arb=arb+i

print(arb)`,
    "142913828922"
  ),
  new EulerProblem(
    11,
    "Largest Product in a Grid",
    "What is the greatest product of four adjacent numbers in the same direction (up, down, left, right, or diagonally) in the 20x20 grid? \
    08 02 22 97 38 15 00 40 00 75 04 05 07 78 52 12 50 77 91 08 \
49 49 99 40 17 81 18 57 60 87 17 40 98 43 69 48 04 56 62 00 \
81 49 31 73 55 79 14 29 93 71 40 67 53 88 30 03 49 13 36 65 \
52 70 95 23 04 60 11 42 69 24 68 56 01 32 56 71 37 02 36 91 \
22 31 16 71 51 67 63 89 41 92 36 54 22 40 40 28 66 33 13 80 \
24 47 32 60 99 03 45 02 44 75 33 53 78 36 84 20 35 17 12 50 \
32 98 81 28 64 23 67 10 26 38 40 67 59 54 70 66 18 38 64 70 \
67 26 20 68 02 62 12 20 95 63 94 39 63 08 40 91 66 49 94 21 \
24 55 58 05 66 73 99 26 97 17 78 78 96 83 14 88 34 89 63 72 \
21 36 23 09 75 00 76 44 20 45 35 14 00 61 33 97 34 31 33 95 \
78 17 53 28 22 75 31 67 15 94 03 80 04 62 16 14 09 53 56 92 \
16 39 05 42 96 35 31 47 55 58 88 24 00 17 54 24 36 29 85 57 \
86 56 00 48 35 71 89 07 05 44 44 37 44 60 21 58 51 54 17 58 \
19 80 81 68 05 94 47 69 28 73 92 13 86 52 17 77 04 89 55 40 \
04 52 08 83 97 35 99 16 07 97 57 32 16 26 26 79 33 27 98 66 \
88 36 68 87 57 62 20 72 03 46 33 67 46 55 12 32 63 93 53 69 \
04 42 16 73 38 25 39 11 24 94 72 18 08 46 29 32 40 62 76 36 \
20 69 36 41 72 30 23 88 34 62 99 69 82 67 59 85 74 04 36 16 \
20 73 35 29 78 31 90 01 74 31 49 71 48 86 81 16 23 57 05 54 \
01 70 54 71 83 51 54 69 16 92 33 48 61 43 52 01 89 19 67 48 ",
    ["optimisation"],
    `import math

grid = [[8,2,22,97,38,15,0,40,0,75,4,5,7,78,52,12,50,77,91,8],
        [49,49,99,40,17,81,18,57,60,87,17,40,98,43,69,48,4,56,62,0],
        [81,49,31,73,55,79,14,29,93,71,40,67,53,88,30,3,49,13,36,65],
        [52,70,95,23,4,60,11,42,69,24,68,56,1,32,56,71,37,2,36,91],
        [22,31,16,71,51,67,63,89,41,92,36,54,22,40,40,28,66,33,13,80],
        [24,47,32,60,99,3,45,2,44,75,33,53,78,36,84,20,35,17,12,50],
        [32,98,81,28,64,23,67,10,26,38,40,67,59,54,70,66,18,38,64,70],
        [67,26,20,68,2,62,12,20,95,63,94,39,63,8,40,91,66,49,94,21],
        [24,55,58,5,66,73,99,26,97,17,78,78,96,83,14,88,34,89,63,72],
        [21,36,23,9,75,0,76,44,20,45,35,14,0,61,33,97,34,31,33,95],
        [78,17,53,28,22,75,31,67,15,94,3,80,4,62,16,14,9,53,56,92],
        [16,39,5,42,96,35,31,47,55,58,88,24,0,17,54,24,36,29,85,57],
        [86,56,0,48,35,71,89,7,5,44,44,37,44,60,21,58,51,54,17,58],
        [19,80,81,68,5,94,47,69,28,73,92,13,86,52,17,77,4,89,55,40],
        [4,52,8,83,97,35,99,16,7,97,57,32,16,26,26,79,33,27,98,66],
        [88,36,68,87,57,62,20,72,3,46,33,67,46,55,12,32,63,93,53,69],
        [4,42,16,73,38,25,39,11,24,94,72,18,8,46,29,32,40,62,76,36],
        [20,69,36,41,72,30,23,88,34,62,99,69,82,67,59,85,74,4,36,16],
        [20,73,35,29,78,31,90,1,74,31,49,71,48,86,81,16,23,57,5,54],
        [1,70,54,71,83,51,54,69,16,92,33,48,61,43,52,1,89,19,67,48]]

#HORIZONTAL CHECK

horizontalMaxProduct = 0
horizontalMaxDigits = []

for row in grid:
    for i in range(len(row) - 3):
        segment = row[i:i+4]
        if 0 in segment:
            continue
        product = math.prod(segment)
        if product > horizontalMaxProduct:
            horizontalMaxProduct = product
            horizontalMaxDigits = segment

print("Max horizontal product digits:", horizontalMaxDigits)
print("Max horizontal product:", horizontalMaxProduct)

#VERTICAL CHECK

verticalMaxProduct = 0
verticalMaxDigits = []

for row in range(0,17):
    for col in range(0,20):
        segment = [grid[row][col],grid[row+1][col],grid[row+2][col],grid[row+3][col]]
        if 0 in segment:
            continue
        product = math.prod(segment)
        if product > verticalMaxProduct:
            verticalMaxProduct = product
            verticalMaxDigits = segment

print("Max vertical product digits:", verticalMaxDigits)
print("Max vertical product:", verticalMaxProduct)

#DIAGONAL DOWN-RIGHT CHECK

primaryDiagonalMaxProduct = 0
primaryDiagonalMaxDigits = []

for row in range(0,17):
    for col in range(0,17):
        segment = [grid[row][col],grid[row+1][col+1],grid[row+2][col+2],grid[row+3][col+3]]
        if 0 in segment:
            continue
        product = math.prod(segment)
        if product > primaryDiagonalMaxProduct:
            primaryDiagonalMaxProduct = product
            primaryDiagonalMaxDigits = segment

print("Max primary diagonal product digits:", primaryDiagonalMaxDigits)
print("Max primary diagonal product:", primaryDiagonalMaxProduct)

#DIAGONAL DOWN-LEFT CHECK

secondaryDiagonalMaxProduct = 0
secondaryDiagonalMaxDigits = []

for row in range(0,17):
    for col in range(3,20):
        segment = [grid[row][col],grid[row+1][col-1],grid[row+2][col-2],grid[row+3][col-3]]
        if 0 in segment:
            continue
        product = math.prod(segment)
        if product > secondaryDiagonalMaxProduct:
            secondaryDiagonalMaxProduct = product
            secondaryDiagonalMaxDigits = segment

result=max(verticalMaxProduct,horizontalMaxProduct,primaryDiagonalMaxProduct,secondaryDiagonalMaxProduct)
print("result is ", result)`,
    "70600674",
    "/maxkelly-repository/Images/PE_problem11.png"
  )
];
