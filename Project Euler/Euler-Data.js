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
    "What is the greatest product of four adjacent numbers in the same direction (up, down, left, right, or diagonally) in the 20x20 grid?",
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
  ),
  new EulerProblem(
    12,
    "Highly Divisible Triangular Number",
    "What is the value of the first triangle number to have over five hundred divisors?",
    ["divisor-count"],
    `import math

def get_divisors(n):
    divisors = set()
    root = int(math.sqrt(n))
    for i in range(1, root + 1):
        if n % i == 0:
            divisors.add(i)
            divisors.add(n // i)
    return sorted(divisors)

triangle = 0
n=1
arb=True
while arb==True:
    triangle += n
    divisors = get_divisors(triangle)
    n+=1
    if len(divisors)>500:
        print("number is:",triangle)
        arb=False
        break`,
    "76576500"
  ),
  new EulerProblem(
    13,
    "Large Sum",
    "Work out the first ten digits of the sum of the following one-hundred 50-digit numbers.",
    ["divisor-count"],
    `arr=[37107287533902102798797998220837590246510135740250,46376937677490009712648124896970078050417018260538,74324986199524741059474233309513058123726617309629,91942213363574161572522430563301811072406154908250,23067588207539346171171980310421047513778063246676,89261670696623633820136378418383684178734361726757,28112879812849979408065481931592621691275889832738,44274228917432520321923589422876796487670272189318,47451445736001306439091167216856844588711603153276,70386486105843025439939619828917593665686757934951,62176457141856560629502157223196586755079324193331,64906352462741904929101432445813822663347944758178,92575867718337217661963751590579239728245598838407,58203565325359399008402633568948830189458628227828,80181199384826282014278194139940567587151170094390,35398664372827112653829987240784473053190104293586,86515506006295864861532075273371959191420517255829,71693888707715466499115593487603532921714970056938,54370070576826684624621495650076471787294438377604,53282654108756828443191190634694037855217779295145,36123272525000296071075082563815656710885258350721,45876576172410976447339110607218265236877223636045,17423706905851860660448207621209813287860733969412,81142660418086830619328460811191061556940512689692,51934325451728388641918047049293215058642563049483,62467221648435076201727918039944693004732956340691,15732444386908125794514089057706229429197107928209,55037687525678773091862540744969844508330393682126,18336384825330154686196124348767681297534375946515,80386287592878490201521685554828717201219257766954,78182833757993103614740356856449095527097864797581,16726320100436897842553539920931837441497806860984,48403098129077791799088218795327364475675590848030,87086987551392711854517078544161852424320693150332,59959406895756536782107074926966537676326235447210,69793950679652694742597709739166693763042633987085,41052684708299085211399427365734116182760315001271,65378607361501080857009149939512557028198746004375,35829035317434717326932123578154982629742552737307,94953759765105305946966067683156574377167401875275,88902802571733229619176668713819931811048770190271,25267680276078003013678680992525463401061632866526,36270218540497705585629946580636237993140746255962,24074486908231174977792365466257246923322810917141,91430288197103288597806669760892938638285025333403,34413065578016127815921815005561868836468420090470,23053081172816430487623791969842487255036638784583,11487696932154902810424020138335124462181441773470,63783299490636259666498587618221225225512486764533,67720186971698544312419572409913959008952310058822,95548255300263520781532296796249481641953868218774,76085327132285723110424803456124867697064507995236,37774242535411291684276865538926205024910326572967,23701913275725675285653248258265463092207058596522,29798860272258331913126375147341994889534765745501,18495701454879288984856827726077713721403798879715,38298203783031473527721580348144513491373226651381,34829543829199918180278916522431027392251122869539,40957953066405232632538044100059654939159879593635,29746152185502371307642255121183693803580388584903,41698116222072977186158236678424689157993532961922,62467957194401269043877107275048102390895523597457,23189706772547915061505504953922979530901129967519,86188088225875314529584099251203829009407770775672,11306739708304724483816533873502340845647058077308,82959174767140363198008187129011875491310547126581,97623331044818386269515456334926366572897563400500,42846280183517070527831839425882145521227251250327,55121603546981200581762165212827652751691296897789,32238195734329339946437501907836945765883352399886,75506164965184775180738168837861091527357929701337,62177842752192623401942399639168044983993173312731,32924185707147349566916674687634660915035914677504,99518671430235219628894890102423325116913619626622,73267460800591547471830798392868535206946944540724,76841822524674417161514036427982273348055556214818,97142617910342598647204516893989422179826088076852,87783646182799346313767754307809363333018982642090,10848802521674670883215120185883543223812876952786,71329612474782464538636993009049310363619763878039,62184073572399794223406235393808339651327408011116,66627891981488087797941876876144230030984490851411,60661826293682836764744779239180335110989069790714,85786944089552990653640447425576083659976645795096,66024396409905389607120198219976047599490197230297,64913982680032973156037120041377903785566085089252,16730939319872750275468906903707539413042652315011,94809377245048795150954100921645863754710598436791,78639167021187492431995700641917969777599028300699,15368713711936614952811305876380278410754449733078,40789923115535562561142322423255033685442488917353,44889911501440648020369068063960672322193204149535,41503128880339536053299340368006977710650566631954,81234880673210146739058568557934581403627822703280,82616570773948327592232845941706525094512325230608,22918802058777319719839450180888072429661980811197,77158542502016545090413245809786882778948721859617,72107838435069186155435662884062257473692284509516,20849603980134001723930671666823555245252804609722,53503534226472524250874054075591789781264330331690]
res=sum(arr)

digits = [int(d) for d in str(res)]
resArr=[]
for i in range(0,10):
    resArr.append(digits[i])

number = int(''.join(map(str, resArr)))
print(number)`,
    "5537376230"
  ),
  new EulerProblem(
    14,
    "Longest Collatz Sequence",
    "Which starting number, under one million, produces the longest chain?",
    ["collatz-sequence","recursion","longest-path"],
    `def even(n):
  n=int(n/2)
  return n
def odd(n):
  n=int((3*n)+1)
  return n
def collatz(n):
  count = 1
  original_n = n
  while n != 1:
    if n % 2 == 0:
      n = even(n)
    else:
      n = odd(n)
    count += 1
  return original_n, count

longest_length = 0
longest_number = 0

for i in range(1,1000000):
  number, length = collatz(i)
  if length > longest_length:
    longest_length = length
    longest_number = number

print("final length is:", longest_length)
print("number required:", longest_number)`,
    "837799"
  ),
  new EulerProblem(
    15,
    "Lattice Paths",
    "Starting in the top left corner of a 2x2 grid, and only being able to move to the right and down, there are exactly 6 routes to the bottom right corner. How many such routes are there through a 20x20 grid?",
    ["combinatorics"],
    `import math

def factorial(n):
    result = 1
    for i in range(2, n + 1):
        result *= i
    return result

def binomial_coefficient(n, k):
    return factorial(n) // (factorial(k) * factorial(n - k))

n = 20
paths = binomial_coefficient(2 * n, n)
print("Number of paths in a 20x20 grid:", paths)`,
    "137846528820"
  ),
  new EulerProblem(
    16,
    "Power Digit Sum",
    "What is the sum of the digits of the number 2^1000?",
    ["large-numbers","digit-sum","power"],
    `num=2**1000

digits = [int(d) for d in str(num)]

q=0
for i in digits:
  q+=i

print("q is:",q)`,
    "1366"
  ),
  new EulerProblem(
    17,
    "Number Letter Counts",
    "If all the numbers from 1 to 1000 inclusive were written out in words, how many letters would be used?",
    ["word-problem","combinatorics"],
    `def number_to_words(n):
    ones = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]
    teens = ["ten", "eleven", "twelve", "thirteen", "fourteen",
             "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"]
    tens = ["", "", "twenty", "thirty", "forty", "fifty",
            "sixty", "seventy", "eighty", "ninety"]

    if n == 1000:
        return "onethousand"

    word = ""

    hundreds_digit = n // 100
    remainder = n % 100

    if hundreds_digit > 0:
        word += ones[hundreds_digit] + "hundred"
        if remainder > 0:
            word += "and"

    if remainder >= 20:
        word += tens[remainder // 10]
        word += ones[remainder % 10]
    elif remainder >= 10:
        word += teens[remainder - 10]
    else:
        word += ones[remainder]

    return word

total_letters = 0
for i in range(1, 1001):
    total_letters += len(number_to_words(i))

print("Total letters used from 1 to 1000:", total_letters)`,
    "21124"
  ),
  new EulerProblem(
    18,
    "Maximum Path Sum I",
    "Find the maximum total from top to bottom of the triangle below:",
    ["path-finding","combinatorics"],
    `paths = [
    '75',
    '95 64',
    '17 47 82',
    '18 35 87 10',
    '20 04 82 47 65',
    '19 01 23 75 03 34',
    '88 02 77 73 07 63 67',
    '99 65 04 28 06 16 70 92',
    '41 41 26 56 83 40 80 70 33',
    '41 48 72 33 47 32 37 16 94 29',
    '53 71 44 65 25 43 91 52 97 51 14',
    '70 11 33 28 77 73 17 78 39 68 17 57',
    '91 71 52 38 17 14 91 43 58 50 27 29 48',
    '63 66 04 68 89 53 67 30 73 16 69 87 40 31',
    '04 62 98 27 23 09 70 98 73 93 38 53 60 04 23'
]

paths=[row.split() for row in paths]
paths=[[int(i) for i in row] for row in paths]

for i in range(len(paths)-1,0,-1):
    for j in range(len(paths[i])-1):
        paths[i-1][j] += max(paths[i][j],paths[i][j+1])
print(paths[0][0])`,
    "1074"
  ),
  new EulerProblem(
    19,
    "Counting Sundays",
    "How many Sundays fell on the first of the month during the twentieth century (1 Jan 1901 to 31 Dec 2000)?",
    ["calendar","combinatorics"],
    `starts=[32,60,91,121,152,182,213,244,274,305,335,1]
leap_starts=[32,61,92,122,153,183,214,245,275,306,336,1]

def checkleap(y):
    if y%100 == 0:
        if y%400==0:
            return True
    elif y%4 == 0: return True
    return False

def countfunc(d):
    k=0
    for i in range(1,365):
        for j in starts:
            if i==j and d==7:
                k=k+1
        d=(d+1)
        if d>7:
            d=d%7
    return k

def leap_countfunc(d):
    k=0
    for i in range(1,366):
        for j in leap_starts:
            if i == j and d == 7:
                k = k + 1
        d = (d + 1)
        if d > 7:
            d = d % 7
    return k

def supercount(y):
    index = y-1901
    d=years[index]
    if checkleap(y): return leap_countfunc(d)
    else: return countfunc(d)

years=[]
for i in range(0,2000):
    years.append(0)
years[0]=2

for r in range(1,2000):
    if not checkleap(r+1900):
        years[r]=years[r-1]+1
        if years[r]>7:
            years[r]=years[r]%7
    if checkleap(r+1900):
        years[r]=years[r-1]+2
        if years[r]>7:
            years[r]=years[r]%7

t=0
for n in range(1901,2001):
    t=t+supercount(n)
print(t)`,
    "171"
  ),
  new EulerProblem(
    20,
    "Factorial Digit Sum",
    "Find the sum of the digits in the number 100!.",
    ["calendar","combinatorics"],
    `n=100
res=1
arb=0
for i in range(n,0,-1):
    res=res*i

digits = [int(d) for d in str(res)]

for i in digits:
    arb=arb+i

print("sum of digits is:",arb)`,
    "648"
  ),
  new EulerProblem(
    21,
    "Amicable Numbers",
    "Let d(n) be defined as the sum of proper divisors of n (numbers less than n which divide evenly into n). If d(a)=b and d(b)=a, where a is not equal to b, then a and b are an amicable pair and each of a and b are called amicable numbers. Evaluate the sum of all the amicable numbers under 10000.",
    ["divisor-sum"],
    `x=10000
y=0
def sumfac(n):
    arr=0
    for i in range(1,n):
        if n % i == 0:
            arr=arr+i
    return arr

for a in range(1,x):
    b=sumfac(a)
    if sumfac(b)==a:
        if a!=b:
            y=y+a

print(y)`,
    "31626"
  ),
  new EulerProblem(
    22,
    "Names Scores",
    "Using names.txt, a 46K text file containing over five-thousand first names, begin by sorting it into alphabetical order. Then working out the alphabetical value for each name, multiply this value by its alphabetical position in the list to obtain a name score. For example, when the list is sorted into alphabetical order, COLIN, which is worth 3+15+12+9+14=53, is the 938th name in the list. So, COLIN would obtain a score of 938*53=49714. What is the total of all the name scores in the file?",
    ["word-problem","sorting"],
    `names=["MARY","PATRICIA","LINDA","BARBARA",...]

names.sort()

place=1
resultCount=0

def letter_to_number(ch):
    return ord(ch.lower()) - ord('a') + 1

for word in names:
    letters = [ch for ch in word.lower() if ch.isalpha()]
    x=0
    for char in letters:
        x=x+letter_to_number(char)
    totalVal=x*place
    resultCount=resultCount+totalVal
    place=place+1

print(resultCount)`,
    "871198282"
  ),
  new EulerProblem(
    23,
    "Non-Abundant Sums",
    "A perfect number is a number for which the sum of its proper divisors is exactly equal to the number. For example, the sum of the proper divisors of 29 would be 1+2+4+7+14=28, which means that 28 is a perfect number. A number n is called deficient if the sum of its proper divisors is less than n and it is called abundant if this sum exceeds n. As 12 is the smallest abundant number, 1+2+3+4+16, the smallest number that can be written as the sum of two abundant numbers is 24. By mathematical analysis, it can be shown that all integers greater than 28123 can be written as the sum of two abundant numbers. However, this upper limit cannot be reduced any further by analysis even though it is known that the greatest number that cannot be expressed as the sum of two abundant numbers is less than this limit. Find the sum of all the positive integers which cannot be written as the sum of two abundant numbers.",
    ["divisor-sum"],
    `LIMIT = 28123

def sum_factors(n):
    total = 1
    for i in range(2, int(n ** 0.5) + 1):
        if n % i == 0:
            total += i
            if i != n // i:
                total += n // i
    return total

abundant = [i for i in range(12, LIMIT + 1) if sum_factors(i) > i]

can_be_written = [False] * (LIMIT + 1)

for i in range(len(abundant)):
    for j in range(i, len(abundant)):
        s = abundant[i] + abundant[j]
        if s <= LIMIT:
            can_be_written[s] = True
        else:
            break

total = sum(i for i in range(1, LIMIT + 1) if not can_be_written[i])

print("Total:", total)`,
    "4179871"
  ),
  new EulerProblem(
    24,
    "Lexicographic Permutations",
    "A permutation is an ordered arrangement of objects. For example, 3124 is one possible permutation of the digits 1, 2, 3 and 4. If all of the permutations are listed numerically or alphabetically, we call it lexicographic order. The lexicographic permutations of 0, 1 and 2 are: 012   021   102   120   201   210. What is the millionth lexicographic permutation of the digits 0, 1, 2, 3, 4, 5, 6, 7, 8 and 9?",
    ["permutation","lexicographic-ordering","combinatorics"],
    `import math


fullList=[0,1,2,3,4,5,6,7,8,9]
n1=0
n2=9
n3=0
result = [0] * len(fullList)

for x in range(0,len(fullList)):
  for i in fullList:
    if n1<1000000:
      n1=n1+math.factorial(n2)
      endi=i
      result[n3]=i
  n1=n1-math.factorial(n2)
  n2=n2-1
  n3=n3+1
  fullList.remove(endi)

print("Result:", ''.join(map(str, result)))`,
    "2783915460"
  ),
  new EulerProblem(
    26,
    "Reciprocal Cycles",
    "Find the value of d < 1000 for which 1/d contains the longest recurring cycle in its decimal fraction part.",
    ["permutation","lexicographic-ordering","combinatorics"],
    `def find_recurring_cycle_length(d):
    remainders = {}
    value = 1
    position = 0

    while value != 0:
        if value in remainders:
            return position - remainders[value]
        remainders[value] = position
        value = (value % d) * 10
        position += 1
    return 0

max_length = 0
best_d = 0

for d in range(1, 1000):
    cycle_length = find_recurring_cycle_length(d)
    if cycle_length > max_length:
        max_length = cycle_length
        best_d = d

print(f"Longest recurring cycle is for 1/{best_d}, with length {max_length}")`,
    "983"
  )
];
