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
    "The sum of the squares of the first ten natural numbers is \\(1^2 + 2^2 + \\ldots + 10^2 = 385\\).<br>" +
  "The square of the sum is \\((1 + 2 + \\ldots + 10)^2 = 3025\\).<br>" +
  "Hence the difference is \\(3025 - 385 = 2640\\).",
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
  ),
  new EulerProblem(
    27,
    "Quadratic Primes",
    "Euler discovered the remarkable quadratic formula: n^2+n+41, which produces 40 primes for the consecutive integer values 0<=n<=39. Considering quadratics of the form: n^2 +an+b where |a|<1000 and |b|<=1000, find the product of the coefficients, a and b, for the quadratic expression that produces the maximum number of primes for consecutive values of n, starting with n=0.",
    ["quadratic-equation","prime-number","sequence-generator"],
    `import math

grandTotal = 0
finalA = 0
finalB = 0

def is_prime(n):
    if n < 2:
        return False
    for i in range(2, int(math.sqrt(n)) + 1):
        if n % i == 0:
            return False
    return True

def func(a, b):
    global grandTotal, finalA, finalB
    total = 0
    for n in range(0, 1000):
        eq = n**2 + a*n + b
        if is_prime(eq):
            total += 1
        else:
            break
    if total > grandTotal:
        grandTotal = total
        finalA = a
        finalB = b

for a in range(-999, 1000):
    for b in range(-1000, 1001):
        func(a, b)

print("Final coefficient product is:", finalA * finalB)
print("a =", finalA, ", b =", finalB)
print("Max consecutive primes:", grandTotal)`,
    "-59231"
  ),
  new EulerProblem(
    28,
    "Number spiral diagonals",
    "Starting with the number 1 and moving to the right in a clockwise direction a 5 by 5 spiral is formed and has the sum of the numbers on the diagonals as 101. What is the sum of the numbers on the diagonals in a 1001 by 1001 spiral formed in the same way?",
    ["grid-pattern"],
    `n=1
total=1

for i in range(3,1001+1,2):
    for j in range(1,5):
        n=n+(i-1)
        total=total+n

print("Grand total is:",total)`,
    "669171001"
  ),
  new EulerProblem(
    29,
    "Distinct Powers",
    "Consider all integer combinations of a^b where a=2,3,4,5 and b=2,3,4,5. If they are then placed in numerical order, with any repeats removed, we get the following sequence of 15 distinct terms: 4,8,9,16,25,27,32,64,81,125,243,256,625,1024,3125. How many distinct terms are in the sequenc generated for a and b being between 2 and 100?",
    ["sequence-generator"],
    `arr=[]
for a in range (2,100+1):
    for b in range (2,100+1):
        arr.append((a**b))
arrSortedUnique = sorted(set(arr))

print("Length of unique array is:",len(arrSortedUnique))`,
    "9183"
  ),
  new EulerProblem(
    30,
    "Digit Fifth Powers",
    "Surprisingly there are only three numbers that can be written as the sum of fourth powers of their digits: 1634=1^4+6^4+3^4+4^4, 8208=8^4+2^4+0^4+8^4, 9474=9^4+4^4+7^4+4^4. The sum of these numbers is 19316. Find the sum of all the numbers that can be written as the sum of fifth powers of their digits.",
    ["power","digit-sum"],
    `def sumPowers(num):
    digits = [int(d) for d in str(num)]
    return sum(d**5 for d in digits)

total=0

for i in range(2,500000):
    if sumPowers(i) == i:
        total += i

print("Result is:",total)`,
    "443839"
  ),
  new EulerProblem(
    31,
    "Coin Sums",
    "In the United Kingdom the currency is made up of pound (£) and pence (p). There are eight coins in general circulation: 1p, 2p, 5p, 10p, 20p, 50p, £1 (100p), and £2 (200p). It is possible to make £2 in the following way: 1×£1 + 1×50p + 2×20p + 1×5p + 1×2p + 3×1p. How many different ways can £2 be made using any number of coins?",
    ["partition","combinatorics"],
    `count = 0
for a in range(0, 201, 200):     # 200p coin
    for b in range(0, 201 - a, 100):  # 100p coin
        for c in range(0, 201 - a - b, 50):
            print('£2 is:', a, '@1 is:', b, '50p is:', c)
            for d in range(0, 201 - a - b - c, 20):
                for e in range(0, 201 - a - b - c - d, 10):
                    for f in range(0, 201 - a - b - c - d - e, 5):
                        for g in range(0, 201 - a - b - c - d - e - f, 2):
                            for h in range(0, 201 - a - b - c - d - e - f - g + 1):
                                if a + b + c + d + e + f + g + h == 200:
                                    count += 1

print("Count is:",count)`,
    "73682"
  ),
  new EulerProblem(
    32,
    "Digit Fifth Powers",
    "We shall say that an n-digit number is pandigital if it makes use of all the digits 1 to n exactly once; for example, the 5-digit number, 15234, is 1 through 5 pandigital. The product 7254 is unusual, as the identity, 39*186=7254, containing multiplicand, multiplier, and product is 1 through 9 pandigital. Find the sum of all products whose multiplicand/multiplier/product identity can be written as a 1 through 9 pandigital. HINT: Some products can be obtained in more than one way so be sure to only include it once in your sum.",
    ["pandigital"],
    `def digitsFunc(n):
    return [int(d) for d in str(n)]

def is_pandigital(a, b, c):
    digits = digitsFunc(a) + digitsFunc(b) + digitsFunc(c)
    return sorted(digits) == [1,2,3,4,5,6,7,8,9]

products = set()

# 1x4 case
for a in range(2, 9):
    for b in range(1345, 4987):
        c = a * b
        if c > 9876:
            continue
        if is_pandigital(a, b, c):
            products.add(c)

# 2x3 case
for a in range(12, 81):
    for b in range(123, 823):
        c = a * b
        if c > 9876:
            continue
        if is_pandigital(a, b, c):
            products.add(c)

print("Total is:", sum(products))
`,
    "45228"
  ),
  new EulerProblem(
    33,
    "Digit Cancelling Fractions",
    "The fraction 49/98 is a curious fraction, as an inexperienced mathematician in attempting to simplify it may incorrectly believe that 49/98=4/8, which is correct, is obtained by cancelling the 9s. We shall consider fractions like, 30/50=3/5, to be trivial examples. There are exactly four non-trivial examples of this type of fraction, less than one in value, and containing two digits in the numerator and denominator. If the product of these four fractions is given in its lowest common terms, find the value of the denominator.",
    ["fraction"],
    `from fractions import Fraction

valid_fractions = []

def digitsFunc(n):
    return [int(d) for d in str(n)]

def removeDigits(x, y):
    fracRes = x / y
    x_digits = digitsFunc(x)
    y_digits = digitsFunc(y)

    if x_digits[1] == 0 and y_digits[1] == 0:
        return

    shared_digits = list(set(x_digits) & set(y_digits))
    if not shared_digits:
        return

    for d in shared_digits:
        x_copy = x_digits.copy()
        y_copy = y_digits.copy()

        if d in x_copy:
            x_copy.remove(d)
        if d in y_copy:
            y_copy.remove(d)

        if len(x_copy) == 1 and len(y_copy) == 1 and y_copy[0] != 0:
            a = x_copy[0]
            b = y_copy[0]
            newFracRes = a / b
            if abs(newFracRes - fracRes) < 1e-10:
                valid_fractions.append(Fraction(x, y))

# Loop over all 2-digit numerator/denominator pairs
for x in range(10, 100):
    for y in range(x + 1, 100):  # y > x to keep value < 1
        removeDigits(x, y)

# Multiply all valid fractions together
product = Fraction(1, 1)
for frac in valid_fractions:
    product *= frac

print("Final simplified product:", product)
print("Answer (denominator):", product.denominator)
`,
    "100"
  ),
  new EulerProblem(
    34,
    "Digit Factorials",
    "145 is a curious number, as 1!+4!+5!=1+24+120=145. Find the sum of all numbers which are equal to the sum of the factorial of their digits.",
    ["factorial","digit-sum"],
    `grandTotal=0

def digitsFunc(n):
    return [int(d) for d in str(n)]

def factorial(n):
    res=1
    for i in range(1,n+1):
        res=res*i
    return res


for n in range (7,10000001):
    total=0
    x=digitsFunc(n)
    for m in x:
        total=total+factorial(m)
    if total==n:
        grandTotal=grandTotal+n

print('Grand total is:',grandTotal)`,
    "40730"
  ),
  new EulerProblem(
    35,
    "Circular Primes",
    "The number, 197, is called a circular prime because all rotations of the digits: 197, 971, and 719, are themselves prime. There are thirteen such primes below 100: 2,3,5,7,11,13,17,31,37,71,73,79, and 97. How many circular primes are there below one million?",
    ["prime-number","digit-manipulation"],
    `def is_prime(x):
  if x <= 1:
      return False
  if x == 2:
      return True
  if x % 2 == 0:
      return False
  for i in range(3, int(x**0.5) + 1, 2):
      if x % i == 0:
          return False
  return True

def is_circular_prime(n):
  digits = [int(d) for d in str(n)]
  num_length = len(digits)

  for i in range(num_length):
      rotated = digits[i:] + digits[:i]  # Rotate digits
      rotated_num = int(''.join(map(str, rotated)))
      if not is_prime(rotated_num):
          return False
  return True

total=0

for w in range(1,1000000):
  if is_circular_prime(w):
    total=total+1

print("Result is:",total)`,
    "55"
  ),
  new EulerProblem(
    36,
    "Double-base Palindromes",
    "The decimal number, 585=1001001001^^2(binary), is palindromic in both bases. Find the sum of all numbers, less than one million, which are palindromic in base 10 and base 2. (Please note that the palindromic number, in either base, may not include leading zeros.)",
    ["palindrome","number-base"],
    `def palindromeCheck(n):
    return str(n) == str(n)[::-1]

def binary(n):
    if n == 0:
        return "0"
    binary = ""
    power = 0
    while 2 ** power <= n:
        power += 1
    power -= 1
    for p in range(power, -1, -1):
        if 2 ** p <= n:
            binary += "1"
            n -= 2 ** p
        else:
            binary += "0"
    return binary

total=0

for i in range(1,1000000):
    if palindromeCheck(i)==True:
        if palindromeCheck(binary(i))==True:
            total=total+i

print("Result is:",total)`,
    "872187"
  ),
  new EulerProblem(
    37,
    "Truncatable Primes",
    "The number 3797 has an interesting property. Being prime itself, it is possible to continuously remove digits from left to right, and remain prime at each stage: 3797, 797, 97, and 7. Similarly we can work from right to left: 3797, 379, 37, and 3. Find the sum of the only eleven primes that are both truncatable from left to right and right to left. NOTE: 2, 3, 5, and 7 are not considered to be truncatable primes.",
    ["prime-number","digit-manipulation"],
    `def is_prime(x):
    if x <= 1:
        return False
    if x == 2:
        return True
    if x % 2 == 0:
        return False
    for i in range(3, int(x**0.5) + 1, 2):
        if x % i == 0:
            return False
    return True

def is_forward_truncatable(n):
    digits = [int(d) for d in str(n)]
    for i in range(len(digits)):
        truncated = digits[i:]
        truncated_num = int(''.join(map(str, truncated)))
        if not is_prime(truncated_num):
            return False
    return True

def is_backward_truncatable(n):
    digits = [int(d) for d in str(n)]
    for i in range(1, len(digits)+1):
        truncated = digits[:i]
        truncated_num = int(''.join(map(str, truncated)))
        if not is_prime(truncated_num):
            return False
    return True

# Main search loop
found = 0
n = 11  # start from 11 (as 2, 3, 5, 7 are excluded)
grand_total = 0

while found < 11:
    if is_forward_truncatable(n):
        if is_backward_truncatable(n):
            found += 1
            grand_total += n
            print(f"Found #{found}: {n}")
    n += 2  # Skip even numbers

print("Sum of all 11 truncatable primes:", grand_total)
`,
    "748317"
  ),
  new EulerProblem(
    38,
    "Pandigital Multiples",
    "Take the number 192 and multiply it by each of 1, 2, and 3: 192 × 1 = 192, 192 × 2 = 384, 192 × 3 = 576. By concatenating each product we get the 1 to 9 pandigital, 192384576. We will call 192384576 the concatenated product of 192 and (1, 2, 3). The same can be achieved by starting with 9 and multiplying by 1, 2, 3, 4, and 5, giving the pandigital 918273645, which is the concatenated product of 9 and (1, 2, 3, 4, 5). What is the largest 1 to 9 pandigital 9-digit number that can be formed as the concatenated product of an integer with (1, 2, …, n) where n > 1?",
    ["pandigital","digit-manipulation"],
    `n1=192
maxValue=0

def panCheck(n1):
    global maxValue
    for i in range(1,10):
        n2=n1*i
        digits = [int(d) for d in str(n2)]
        arr.extend(digits)
        if sorted(arr) == [1, 2, 3, 4, 5, 6, 7, 8, 9]:
            n3=int(''.join(map(str, arr)))
            if n3>maxValue:
                maxValue=n3
            break

for i in range(1,1000000):
    arr=[]
    panCheck(i)

print("Final value is:",maxValue)`,
    "932718654"
  ),
  new EulerProblem(
    39,
    "Integer Right Triangles",
    "If p is the perimeter of a right angle triangle with integral length sides {a,b,c}, there are exactly three solutions for p=120: {20,48,52}, {24,45,51}, {30,40,50}. For which value of p ≤ 1000, is the number of solutions maximised?",
    ["geometry","partition","pythagorean-triple"],
    `from math import gcd

limit = 1000
counts = [0]*(limit+1)

# primitive perimeters p0 = 2*m*(m+n); add multiples
m_max = int((limit/2)**0.5) + 1
for m in range(2, m_max+1):
    for n in range(1, m):
        if (m-n) % 2 == 1 and gcd(m, n) == 1:
            p0 = 2*m*(m+n)
            for p in range(p0, limit+1, p0):
                counts[p] += 1

print(max(range(limit+1), key=counts.__getitem__))`,
    "840"
  ),
  new EulerProblem(
    40,
    "Champernowne's Constant",
    "An irrational decimal fraction is created by concatenating the positive integers: 0.123456789101112131415161718192021..., where the 12th digit of the fractional part is 1; if dₙ represents the nᵗʰ digit of the fractional part, find the value of d₁ × d₁₀ × d₁₀₀ × d₁₀₀₀ × d₁₀₀₀₀ × d₁₀₀₀₀₀.",
    ["X"],
    `arr=[]
finalArr=[]
for i in range (1,1000000):
  arr.append(i)

for digits in arr:
  for d in str(digits):
    d=int(d)
    finalArr.append(d)

#1st digit:
q=finalArr[0]
#10st digit:
r=finalArr[9]
#100st digit:
s=finalArr[99]
#1000st digit:
t=finalArr[999]
#10000st digit:
u=finalArr[9999]
#100000st digit:
v=finalArr[99999]
#1000000st digit:
w=finalArr[999999]

res=q*r*s*t*u*v*w
print("Res is:",res)`,
    "210"
  ),
  new EulerProblem(
    41,
    "Pandigital Prime",
    "We shall say that an n-digit number is pandigital if it makes use of all the digits 1 to n exactly once; for example, 2143 is a 4-digit pandigital number and is also prime; what is the largest n-digit pandigital prime that exists?",
    ["pandigital","prime-number"],
    `import math

def is_prime(n):
    if n < 2:
        return False
    if n == 2 or n == 3:
        return True
    if n % 2 == 0:
        return False
    for i in range(3, int(math.isqrt(n)) + 1, 2):
        if n % i == 0:
            return False
    return True

# Manual permutation generator (no itertools)
def generate_permutations(arr, l, r, results):
    if l == r:
        results.append(int(''.join(arr)))
    else:
        for i in range(l, r + 1):
            arr[l], arr[i] = arr[i], arr[l]
            generate_permutations(arr, l + 1, r, results)
            arr[l], arr[i] = arr[i], arr[l]  # backtrack

def find_largest_pandigital_prime():
    # Start from 7 — because 8- and 9-digit pandigital numbers are divisible by 3
    for length in range(7, 0, -1):
        digits = [str(d) for d in range(1, length + 1)]
        results = []
        generate_permutations(digits, 0, length - 1, results)
        results.sort(reverse=True)
        for num in results:
            if is_prime(num):
                return num
    return None

result = find_largest_pandigital_prime()
print("Result is:", result)
`,
    "7652413"
  ),
  new EulerProblem(
    42,
    "Coded Triangle Numbers",
    "The nth term of the sequence of triangle numbers is given by tn = ½ n(n + 1), so the first ten triangle numbers are 1, 3, 6, 10, 15, 21, 28, 36, 45, 55; by converting each letter in a word to its alphabetical position and summing these to form a word value, a word is a triangle word if its value is a triangle number, and using words.txt (a 16K file with nearly two thousand common English words), determine how many are triangle words.",
    ["triangle-number","figurate-number","word-problem"],
    `arr = [
    "A", "ABILITY", "ABLE", "ABOUT", "ABOVE", "ABSENCE", "ABSOLUTELY",
    "ACADEMIC", "ACCEPT", "ACCESS", "ACCIDENT", "ACCOMPANY", "ACCORDING",
    "ACCOUNT", "ACHIEVE", "ACHIEVEMENT", "ACID", "ACQUIRE", "ACROSS", "ACT",
    "ACTION", "ACTIVE", "ACTIVITY", "ACTUAL", "ACTUALLY", "ADD", "ADDITION",
    "ADDITIONAL", "ADDRESS", "ADMINISTRATION", "ADMIT", "ADOPT", "ADULT",
    "ADVANCE", "ADVANTAGE", "ADVICE", "ADVISE", "AFFAIR", "AFFECT", "AFFORD",
    "AFRAID", "AFTER", "AFTERNOON", "AFTERWARDS", "AGAIN", "AGAINST", "AGE",
    "AGENCY", "AGENT", "AGO", "AGREE", "AGREEMENT", "AHEAD", "AID", "AIM",
    "AIR", "AIRCRAFT", "ALL", "ALLOW", "ALMOST", "ALONE", "ALONG", "ALREADY",
    "ALRIGHT", "ALSO", "ALTERNATIVE", "ALTHOUGH", "ALWAYS", "AMONG", "AMONGST",
    "AMOUNT", "AN", "ANALYSIS", "ANCIENT", "AND", "ANIMAL", "ANNOUNCE",
    "ANNUAL", "ANOTHER", "ANSWER", "ANY", "ANYBODY", "ANYONE", "ANYTHING",
    "ANYWAY", "APART", "APPARENT", "APPARENTLY", "APPEAL", "APPEAR",
    "APPEARANCE", "APPLICATION", "APPLY", "APPOINT", "APPOINTMENT", "APPROACH",
    "APPROPRIATE", "APPROVE", "AREA", "ARGUE", "ARGUMENT", "ARISE", "ARM",
    "ARMY", "AROUND", "ARRANGE", "ARRANGEMENT", "ARRIVE", "ART", "ARTICLE",
    "ARTIST", "AS", "ASK", "ASPECT", "ASSEMBLY", "ASSESS", "ASSESSMENT",
    "ASSET", "ASSOCIATE", "ASSOCIATION", "ASSUME", "ASSUMPTION", "AT",
    "ATMOSPHERE", "ATTACH", "ATTACK", "ATTEMPT", "ATTEND", "ATTENTION",
    "ATTITUDE", "ATTRACT", "ATTRACTIVE", "AUDIENCE", "AUTHOR", "AUTHORITY",
    "AVAILABLE", "AVERAGE", "AVOID", "AWARD", "AWARE", "AWAY", "AYE", "BABY",
    "BACK", "BACKGROUND", "BAD", "BAG", "BALANCE", "BALL", "BAND", "BANK",
    "BAR", "BASE", "BASIC", "BASIS", "BATTLE", "BE", "BEAR", "BEAT",
    "BEAUTIFUL", "BECAUSE", "BECOME", "BED", "BEDROOM", "BEFORE", "BEGIN",
    "BEGINNING", "BEHAVIOUR", "BEHIND", "BELIEF", "BELIEVE", "BELONG", "BELOW",
    "BENEATH", "BENEFIT", "BESIDE", "BEST", "BETTER", "BETWEEN", "BEYOND",
    "BIG", "BILL", "BIND", "BIRD", "BIRTH", "BIT", "BLACK", "BLOCK", "BLOOD",
    "BLOODY", "BLOW", "BLUE", "BOARD", "BOAT", "BODY", "BONE", "BOOK",
    "BORDER", "BOTH", "BOTTLE", "BOTTOM", "BOX", "BOY", "BRAIN", "BRANCH",
    "BREAK", "BREATH", "BRIDGE", "BRIEF", "BRIGHT", "BRING", "BROAD",
    "BROTHER", "BUDGET", "BUILD", "BUILDING", "BURN", "BUS", "BUSINESS",
    "BUSY", "BUT", "BUY", "BY", "CABINET", "CALL", "CAMPAIGN", "CAN",
    "CANDIDATE", "CAPABLE", "CAPACITY", "CAPITAL", "CAR", "CARD", "CARE",
    "CAREER", "CAREFUL", "CAREFULLY", "CARRY", "CASE", "CASH", "CAT", "CATCH",
    "CATEGORY", "CAUSE", "CELL", "CENTRAL", "CENTRE", "CENTURY", "CERTAIN",
    "CERTAINLY", "CHAIN", "CHAIR", "CHAIRMAN", "CHALLENGE", "CHANCE", "CHANGE",
    "CHANNEL", "CHAPTER", "CHARACTER", "CHARACTERISTIC", "CHARGE", "CHEAP",
    "CHECK", "CHEMICAL", "CHIEF", "CHILD", "CHOICE", "CHOOSE", "CHURCH",
    "CIRCLE", "CIRCUMSTANCE", "CITIZEN", "CITY", "CIVIL", "CLAIM", "CLASS",
    "CLEAN", "CLEAR", "CLEARLY", "CLIENT", "CLIMB", "CLOSE", "CLOSELY",
    "CLOTHES", "CLUB", "COAL", "CODE", "COFFEE", "COLD", "COLLEAGUE",
    "COLLECT", "COLLECTION", "COLLEGE", "COLOUR", "COMBINATION", "COMBINE",
    "COME", "COMMENT", "COMMERCIAL", "COMMISSION", "COMMIT", "COMMITMENT",
    "COMMITTEE", "COMMON", "COMMUNICATION", "COMMUNITY", "COMPANY", "COMPARE",
    "COMPARISON", "COMPETITION", "COMPLETE", "COMPLETELY", "COMPLEX",
    "COMPONENT", "COMPUTER", "CONCENTRATE", "CONCENTRATION", "CONCEPT",
    "CONCERN", "CONCERNED", "CONCLUDE", "CONCLUSION", "CONDITION", "CONDUCT",
    "CONFERENCE", "CONFIDENCE", "CONFIRM", "CONFLICT", "CONGRESS", "CONNECT",
    "CONNECTION", "CONSEQUENCE", "CONSERVATIVE", "CONSIDER", "CONSIDERABLE",
    "CONSIDERATION", "CONSIST", "CONSTANT", "CONSTRUCTION", "CONSUMER",
    "CONTACT", "CONTAIN", "CONTENT", "CONTEXT", "CONTINUE", "CONTRACT",
    "CONTRAST", "CONTRIBUTE", "CONTRIBUTION", "CONTROL", "CONVENTION",
    "CONVERSATION", "COPY", "CORNER", "CORPORATE", "CORRECT", "COS", "COST",
    "COULD", "COUNCIL", "COUNT", "COUNTRY", "COUNTY", "COUPLE", "COURSE",
    "COURT", "COVER", "CREATE", "CREATION", "CREDIT", "CRIME", "CRIMINAL",
    "CRISIS", "CRITERION", "CRITICAL", "CRITICISM", "CROSS", "CROWD", "CRY",
    "CULTURAL", "CULTURE", "CUP", "CURRENT", "CURRENTLY", "CURRICULUM",
    "CUSTOMER", "CUT", "DAMAGE", "DANGER", "DANGEROUS", "DARK", "DATA", "DATE",
    "DAUGHTER", "DAY", "DEAD", "DEAL", "DEATH", "DEBATE", "DEBT", "DECADE",
    "DECIDE", "DECISION", "DECLARE", "DEEP", "DEFENCE", "DEFENDANT", "DEFINE",
    "DEFINITION", "DEGREE", "DELIVER", "DEMAND", "DEMOCRATIC", "DEMONSTRATE",
    "DENY", "DEPARTMENT", "DEPEND", "DEPUTY", "DERIVE", "DESCRIBE",
    "DESCRIPTION", "DESIGN", "DESIRE", "DESK", "DESPITE", "DESTROY", "DETAIL",
    "DETAILED", "DETERMINE", "DEVELOP", "DEVELOPMENT", "DEVICE", "DIE",
    "DIFFERENCE", "DIFFERENT", "DIFFICULT", "DIFFICULTY", "DINNER", "DIRECT",
    "DIRECTION", "DIRECTLY", "DIRECTOR", "DISAPPEAR", "DISCIPLINE", "DISCOVER",
    "DISCUSS", "DISCUSSION", "DISEASE", "DISPLAY", "DISTANCE", "DISTINCTION",
    "DISTRIBUTION", "DISTRICT", "DIVIDE", "DIVISION", "DO", "DOCTOR",
    "DOCUMENT", "DOG", "DOMESTIC", "DOOR", "DOUBLE", "DOUBT", "DOWN", "DRAW",
    "DRAWING", "DREAM", "DRESS", "DRINK", "DRIVE", "DRIVER", "DROP", "DRUG",
    "DRY", "DUE", "DURING", "DUTY", "EACH", "EAR", "EARLY", "EARN", "EARTH",
    "EASILY", "EAST", "EASY", "EAT", "ECONOMIC", "ECONOMY", "EDGE", "EDITOR",
    "EDUCATION", "EDUCATIONAL", "EFFECT", "EFFECTIVE", "EFFECTIVELY", "EFFORT",
    "EGG", "EITHER", "ELDERLY", "ELECTION", "ELEMENT", "ELSE", "ELSEWHERE",
    "EMERGE", "EMPHASIS", "EMPLOY", "EMPLOYEE", "EMPLOYER", "EMPLOYMENT",
    "EMPTY", "ENABLE", "ENCOURAGE", "END", "ENEMY", "ENERGY", "ENGINE",
    "ENGINEERING", "ENJOY", "ENOUGH", "ENSURE", "ENTER", "ENTERPRISE",
    "ENTIRE", "ENTIRELY", "ENTITLE", "ENTRY", "ENVIRONMENT", "ENVIRONMENTAL",
    "EQUAL", "EQUALLY", "EQUIPMENT", "ERROR", "ESCAPE", "ESPECIALLY",
    "ESSENTIAL", "ESTABLISH", "ESTABLISHMENT", "ESTATE", "ESTIMATE", "EVEN",
    "EVENING", "EVENT", "EVENTUALLY", "EVER", "EVERY", "EVERYBODY", "EVERYONE",
    "EVERYTHING", "EVIDENCE", "EXACTLY", "EXAMINATION", "EXAMINE", "EXAMPLE",
    "EXCELLENT", "EXCEPT", "EXCHANGE", "EXECUTIVE", "EXERCISE", "EXHIBITION",
    "EXIST", "EXISTENCE", "EXISTING", "EXPECT", "EXPECTATION", "EXPENDITURE",
    "EXPENSE", "EXPENSIVE", "EXPERIENCE", "EXPERIMENT", "EXPERT", "EXPLAIN",
    "EXPLANATION", "EXPLORE", "EXPRESS", "EXPRESSION", "EXTEND", "EXTENT",
    "EXTERNAL", "EXTRA", "EXTREMELY", "EYE", "FACE", "FACILITY", "FACT",
    "FACTOR", "FACTORY", "FAIL", "FAILURE", "FAIR", "FAIRLY", "FAITH", "FALL",
    "FAMILIAR", "FAMILY", "FAMOUS", "FAR", "FARM", "FARMER", "FASHION", "FAST",
    "FATHER", "FAVOUR", "FEAR", "FEATURE", "FEE", "FEEL", "FEELING", "FEMALE",
    "FEW", "FIELD", "FIGHT", "FIGURE", "FILE", "FILL", "FILM", "FINAL",
    "FINALLY", "FINANCE", "FINANCIAL", "FIND", "FINDING", "FINE", "FINGER",
    "FINISH", "FIRE", "FIRM", "FIRST", "FISH", "FIT", "FIX", "FLAT", "FLIGHT",
    "FLOOR", "FLOW", "FLOWER", "FLY", "FOCUS", "FOLLOW", "FOLLOWING", "FOOD",
    "FOOT", "FOOTBALL", "FOR", "FORCE", "FOREIGN", "FOREST", "FORGET", "FORM",
    "FORMAL", "FORMER", "FORWARD", "FOUNDATION", "FREE", "FREEDOM",
    "FREQUENTLY", "FRESH", "FRIEND", "FROM", "FRONT", "FRUIT", "FUEL", "FULL",
    "FULLY", "FUNCTION", "FUND", "FUNNY", "FURTHER", "FUTURE", "GAIN", "GAME",
    "GARDEN", "GAS", "GATE", "GATHER", "GENERAL", "GENERALLY", "GENERATE",
    "GENERATION", "GENTLEMAN", "GET", "GIRL", "GIVE", "GLASS", "GO", "GOAL",
    "GOD", "GOLD", "GOOD", "GOVERNMENT", "GRANT", "GREAT", "GREEN", "GREY",
    "GROUND", "GROUP", "GROW", "GROWING", "GROWTH", "GUEST", "GUIDE", "GUN",
    "HAIR", "HALF", "HALL", "HAND", "HANDLE", "HANG", "HAPPEN", "HAPPY",
    "HARD", "HARDLY", "HATE", "HAVE", "HE", "HEAD", "HEALTH", "HEAR", "HEART",
    "HEAT", "HEAVY", "HELL", "HELP", "HENCE", "HER", "HERE", "HERSELF", "HIDE",
    "HIGH", "HIGHLY", "HILL", "HIM", "HIMSELF", "HIS", "HISTORICAL", "HISTORY",
    "HIT", "HOLD", "HOLE", "HOLIDAY", "HOME", "HOPE", "HORSE", "HOSPITAL",
    "HOT", "HOTEL", "HOUR", "HOUSE", "HOUSEHOLD", "HOUSING", "HOW", "HOWEVER",
    "HUGE", "HUMAN", "HURT", "HUSBAND", "I", "IDEA", "IDENTIFY", "IF",
    "IGNORE", "ILLUSTRATE", "IMAGE", "IMAGINE", "IMMEDIATE", "IMMEDIATELY",
    "IMPACT", "IMPLICATION", "IMPLY", "IMPORTANCE", "IMPORTANT", "IMPOSE",
    "IMPOSSIBLE", "IMPRESSION", "IMPROVE", "IMPROVEMENT", "IN", "INCIDENT",
    "INCLUDE", "INCLUDING", "INCOME", "INCREASE", "INCREASED", "INCREASINGLY",
    "INDEED", "INDEPENDENT", "INDEX", "INDICATE", "INDIVIDUAL", "INDUSTRIAL",
    "INDUSTRY", "INFLUENCE", "INFORM", "INFORMATION", "INITIAL", "INITIATIVE",
    "INJURY", "INSIDE", "INSIST", "INSTANCE", "INSTEAD", "INSTITUTE",
    "INSTITUTION", "INSTRUCTION", "INSTRUMENT", "INSURANCE", "INTEND",
    "INTENTION", "INTEREST", "INTERESTED", "INTERESTING", "INTERNAL",
    "INTERNATIONAL", "INTERPRETATION", "INTERVIEW", "INTO", "INTRODUCE",
    "INTRODUCTION", "INVESTIGATE", "INVESTIGATION", "INVESTMENT", "INVITE",
    "INVOLVE", "IRON", "IS", "ISLAND", "ISSUE", "IT", "ITEM", "ITS", "ITSELF",
    "JOB", "JOIN", "JOINT", "JOURNEY", "JUDGE", "JUMP", "JUST", "JUSTICE",
    "KEEP", "KEY", "KID", "KILL", "KIND", "KING", "KITCHEN", "KNEE", "KNOW",
    "KNOWLEDGE", "LABOUR", "LACK", "LADY", "LAND", "LANGUAGE", "LARGE",
    "LARGELY", "LAST", "LATE", "LATER", "LATTER", "LAUGH", "LAUNCH", "LAW",
    "LAWYER", "LAY", "LEAD", "LEADER", "LEADERSHIP", "LEADING", "LEAF",
    "LEAGUE", "LEAN", "LEARN", "LEAST", "LEAVE", "LEFT", "LEG", "LEGAL",
    "LEGISLATION", "LENGTH", "LESS", "LET", "LETTER", "LEVEL", "LIABILITY",
    "LIBERAL", "LIBRARY", "LIE", "LIFE", "LIFT", "LIGHT", "LIKE", "LIKELY",
    "LIMIT", "LIMITED", "LINE", "LINK", "LIP", "LIST", "LISTEN", "LITERATURE",
    "LITTLE", "LIVE", "LIVING", "LOAN", "LOCAL", "LOCATION", "LONG", "LOOK",
    "LORD", "LOSE", "LOSS", "LOT", "LOVE", "LOVELY", "LOW", "LUNCH", "MACHINE",
    "MAGAZINE", "MAIN", "MAINLY", "MAINTAIN", "MAJOR", "MAJORITY", "MAKE",
    "MALE", "MAN", "MANAGE", "MANAGEMENT", "MANAGER", "MANNER", "MANY", "MAP",
    "MARK", "MARKET", "MARRIAGE", "MARRIED", "MARRY", "MASS", "MASTER",
    "MATCH", "MATERIAL", "MATTER", "MAY", "MAYBE", "ME", "MEAL", "MEAN",
    "MEANING", "MEANS", "MEANWHILE", "MEASURE", "MECHANISM", "MEDIA",
    "MEDICAL", "MEET", "MEETING", "MEMBER", "MEMBERSHIP", "MEMORY", "MENTAL",
    "MENTION", "MERELY", "MESSAGE", "METAL", "METHOD", "MIDDLE", "MIGHT",
    "MILE", "MILITARY", "MILK", "MIND", "MINE", "MINISTER", "MINISTRY",
    "MINUTE", "MISS", "MISTAKE", "MODEL", "MODERN", "MODULE", "MOMENT",
    "MONEY", "MONTH", "MORE", "MORNING", "MOST", "MOTHER", "MOTION", "MOTOR",
    "MOUNTAIN", "MOUTH", "MOVE", "MOVEMENT", "MUCH", "MURDER", "MUSEUM",
    "MUSIC", "MUST", "MY", "MYSELF", "NAME", "NARROW", "NATION", "NATIONAL",
    "NATURAL", "NATURE", "NEAR", "NEARLY", "NECESSARILY", "NECESSARY", "NECK",
    "NEED", "NEGOTIATION", "NEIGHBOUR", "NEITHER", "NETWORK", "NEVER",
    "NEVERTHELESS", "NEW", "NEWS", "NEWSPAPER", "NEXT", "NICE", "NIGHT", "NO",
    "NOBODY", "NOD", "NOISE", "NONE", "NOR", "NORMAL", "NORMALLY", "NORTH",
    "NORTHERN", "NOSE", "NOT", "NOTE", "NOTHING", "NOTICE", "NOTION", "NOW",
    "NUCLEAR", "NUMBER", "NURSE", "OBJECT", "OBJECTIVE", "OBSERVATION",
    "OBSERVE", "OBTAIN", "OBVIOUS", "OBVIOUSLY", "OCCASION", "OCCUR", "ODD",
    "OF", "OFF", "OFFENCE", "OFFER", "OFFICE", "OFFICER", "OFFICIAL", "OFTEN",
    "OIL", "OKAY", "OLD", "ON", "ONCE", "ONE", "ONLY", "ONTO", "OPEN",
    "OPERATE", "OPERATION", "OPINION", "OPPORTUNITY", "OPPOSITION", "OPTION",
    "OR", "ORDER", "ORDINARY", "ORGANISATION", "ORGANISE", "ORGANIZATION",
    "ORIGIN", "ORIGINAL", "OTHER", "OTHERWISE", "OUGHT", "OUR", "OURSELVES",
    "OUT", "OUTCOME", "OUTPUT", "OUTSIDE", "OVER", "OVERALL", "OWN", "OWNER",
    "PACKAGE", "PAGE", "PAIN", "PAINT", "PAINTING", "PAIR", "PANEL", "PAPER",
    "PARENT", "PARK", "PARLIAMENT", "PART", "PARTICULAR", "PARTICULARLY",
    "PARTLY", "PARTNER", "PARTY", "PASS", "PASSAGE", "PAST", "PATH", "PATIENT",
    "PATTERN", "PAY", "PAYMENT", "PEACE", "PENSION", "PEOPLE", "PER",
    "PERCENT", "PERFECT", "PERFORM", "PERFORMANCE", "PERHAPS", "PERIOD",
    "PERMANENT", "PERSON", "PERSONAL", "PERSUADE", "PHASE", "PHONE",
    "PHOTOGRAPH", "PHYSICAL", "PICK", "PICTURE", "PIECE", "PLACE", "PLAN",
    "PLANNING", "PLANT", "PLASTIC", "PLATE", "PLAY", "PLAYER", "PLEASE",
    "PLEASURE", "PLENTY", "PLUS", "POCKET", "POINT", "POLICE", "POLICY",
    "POLITICAL", "POLITICS", "POOL", "POOR", "POPULAR", "POPULATION",
    "POSITION", "POSITIVE", "POSSIBILITY", "POSSIBLE", "POSSIBLY", "POST",
    "POTENTIAL", "POUND", "POWER", "POWERFUL", "PRACTICAL", "PRACTICE",
    "PREFER", "PREPARE", "PRESENCE", "PRESENT", "PRESIDENT", "PRESS",
    "PRESSURE", "PRETTY", "PREVENT", "PREVIOUS", "PREVIOUSLY", "PRICE",
    "PRIMARY", "PRIME", "PRINCIPLE", "PRIORITY", "PRISON", "PRISONER",
    "PRIVATE", "PROBABLY", "PROBLEM", "PROCEDURE", "PROCESS", "PRODUCE",
    "PRODUCT", "PRODUCTION", "PROFESSIONAL", "PROFIT", "PROGRAM", "PROGRAMME",
    "PROGRESS", "PROJECT", "PROMISE", "PROMOTE", "PROPER", "PROPERLY",
    "PROPERTY", "PROPORTION", "PROPOSE", "PROPOSAL", "PROSPECT", "PROTECT",
    "PROTECTION", "PROVE", "PROVIDE", "PROVIDED", "PROVISION", "PUB", "PUBLIC",
    "PUBLICATION", "PUBLISH", "PULL", "PUPIL", "PURPOSE", "PUSH", "PUT",
    "QUALITY", "QUARTER", "QUESTION", "QUICK", "QUICKLY", "QUIET", "QUITE",
    "RACE", "RADIO", "RAILWAY", "RAIN", "RAISE", "RANGE", "RAPIDLY", "RARE",
    "RATE", "RATHER", "REACH", "REACTION", "READ", "READER", "READING",
    "READY", "REAL", "REALISE", "REALITY", "REALIZE", "REALLY", "REASON",
    "REASONABLE", "RECALL", "RECEIVE", "RECENT", "RECENTLY", "RECOGNISE",
    "RECOGNITION", "RECOGNIZE", "RECOMMEND", "RECORD", "RECOVER", "RED",
    "REDUCE", "REDUCTION", "REFER", "REFERENCE", "REFLECT", "REFORM", "REFUSE",
    "REGARD", "REGION", "REGIONAL", "REGULAR", "REGULATION", "REJECT",
    "RELATE", "RELATION", "RELATIONSHIP", "RELATIVE", "RELATIVELY", "RELEASE",
    "RELEVANT", "RELIEF", "RELIGION", "RELIGIOUS", "RELY", "REMAIN",
    "REMEMBER", "REMIND", "REMOVE", "REPEAT", "REPLACE", "REPLY", "REPORT",
    "REPRESENT", "REPRESENTATION", "REPRESENTATIVE", "REQUEST", "REQUIRE",
    "REQUIREMENT", "RESEARCH", "RESOURCE", "RESPECT", "RESPOND", "RESPONSE",
    "RESPONSIBILITY", "RESPONSIBLE", "REST", "RESTAURANT", "RESULT", "RETAIN",
    "RETURN", "REVEAL", "REVENUE", "REVIEW", "REVOLUTION", "RICH", "RIDE",
    "RIGHT", "RING", "RISE", "RISK", "RIVER", "ROAD", "ROCK", "ROLE", "ROLL",
    "ROOF", "ROOM", "ROUND", "ROUTE", "ROW", "ROYAL", "RULE", "RUN", "RURAL",
    "SAFE", "SAFETY", "SALE", "SAME", "SAMPLE", "SATISFY", "SAVE", "SAY",
    "SCALE", "SCENE", "SCHEME", "SCHOOL", "SCIENCE", "SCIENTIFIC", "SCIENTIST",
    "SCORE", "SCREEN", "SEA", "SEARCH", "SEASON", "SEAT", "SECOND",
    "SECONDARY", "SECRETARY", "SECTION", "SECTOR", "SECURE", "SECURITY", "SEE",
    "SEEK", "SEEM", "SELECT", "SELECTION", "SELL", "SEND", "SENIOR", "SENSE",
    "SENTENCE", "SEPARATE", "SEQUENCE", "SERIES", "SERIOUS", "SERIOUSLY",
    "SERVANT", "SERVE", "SERVICE", "SESSION", "SET", "SETTLE", "SETTLEMENT",
    "SEVERAL", "SEVERE", "SEX", "SEXUAL", "SHAKE", "SHALL", "SHAPE", "SHARE",
    "SHE", "SHEET", "SHIP", "SHOE", "SHOOT", "SHOP", "SHORT", "SHOT", "SHOULD",
    "SHOULDER", "SHOUT", "SHOW", "SHUT", "SIDE", "SIGHT", "SIGN", "SIGNAL",
    "SIGNIFICANCE", "SIGNIFICANT", "SILENCE", "SIMILAR", "SIMPLE", "SIMPLY",
    "SINCE", "SING", "SINGLE", "SIR", "SISTER", "SIT", "SITE", "SITUATION",
    "SIZE", "SKILL", "SKIN", "SKY", "SLEEP", "SLIGHTLY", "SLIP", "SLOW",
    "SLOWLY", "SMALL", "SMILE", "SO", "SOCIAL", "SOCIETY", "SOFT", "SOFTWARE",
    "SOIL", "SOLDIER", "SOLICITOR", "SOLUTION", "SOME", "SOMEBODY", "SOMEONE",
    "SOMETHING", "SOMETIMES", "SOMEWHAT", "SOMEWHERE", "SON", "SONG", "SOON",
    "SORRY", "SORT", "SOUND", "SOURCE", "SOUTH", "SOUTHERN", "SPACE", "SPEAK",
    "SPEAKER", "SPECIAL", "SPECIES", "SPECIFIC", "SPEECH", "SPEED", "SPEND",
    "SPIRIT", "SPORT", "SPOT", "SPREAD", "SPRING", "STAFF", "STAGE", "STAND",
    "STANDARD", "STAR", "START", "STATE", "STATEMENT", "STATION", "STATUS",
    "STAY", "STEAL", "STEP", "STICK", "STILL", "STOCK", "STONE", "STOP",
    "STORE", "STORY", "STRAIGHT", "STRANGE", "STRATEGY", "STREET", "STRENGTH",
    "STRIKE", "STRONG", "STRONGLY", "STRUCTURE", "STUDENT", "STUDIO", "STUDY",
    "STUFF", "STYLE", "SUBJECT", "SUBSTANTIAL", "SUCCEED", "SUCCESS",
    "SUCCESSFUL", "SUCH", "SUDDENLY", "SUFFER", "SUFFICIENT", "SUGGEST",
    "SUGGESTION", "SUITABLE", "SUM", "SUMMER", "SUN", "SUPPLY", "SUPPORT",
    "SUPPOSE", "SURE", "SURELY", "SURFACE", "SURPRISE", "SURROUND", "SURVEY",
    "SURVIVE", "SWITCH", "SYSTEM", "TABLE", "TAKE", "TALK", "TALL", "TAPE",
    "TARGET", "TASK", "TAX", "TEA", "TEACH", "TEACHER", "TEACHING", "TEAM",
    "TEAR", "TECHNICAL", "TECHNIQUE", "TECHNOLOGY", "TELEPHONE", "TELEVISION",
    "TELL", "TEMPERATURE", "TEND", "TERM", "TERMS", "TERRIBLE", "TEST", "TEXT",
    "THAN", "THANK", "THANKS", "THAT", "THE", "THEATRE", "THEIR", "THEM",
    "THEME", "THEMSELVES", "THEN", "THEORY", "THERE", "THEREFORE", "THESE",
    "THEY", "THIN", "THING", "THINK", "THIS", "THOSE", "THOUGH", "THOUGHT",
    "THREAT", "THREATEN", "THROUGH", "THROUGHOUT", "THROW", "THUS", "TICKET",
    "TIME", "TINY", "TITLE", "TO", "TODAY", "TOGETHER", "TOMORROW", "TONE",
    "TONIGHT", "TOO", "TOOL", "TOOTH", "TOP", "TOTAL", "TOTALLY", "TOUCH",
    "TOUR", "TOWARDS", "TOWN", "TRACK", "TRADE", "TRADITION", "TRADITIONAL",
    "TRAFFIC", "TRAIN", "TRAINING", "TRANSFER", "TRANSPORT", "TRAVEL", "TREAT",
    "TREATMENT", "TREATY", "TREE", "TREND", "TRIAL", "TRIP", "TROOP",
    "TROUBLE", "TRUE", "TRUST", "TRUTH", "TRY", "TURN", "TWICE", "TYPE",
    "TYPICAL", "UNABLE", "UNDER", "UNDERSTAND", "UNDERSTANDING", "UNDERTAKE",
    "UNEMPLOYMENT", "UNFORTUNATELY", "UNION", "UNIT", "UNITED", "UNIVERSITY",
    "UNLESS", "UNLIKELY", "UNTIL", "UP", "UPON", "UPPER", "URBAN", "US", "USE",
    "USED", "USEFUL", "USER", "USUAL", "USUALLY", "VALUE", "VARIATION",
    "VARIETY", "VARIOUS", "VARY", "VAST", "VEHICLE", "VERSION", "VERY", "VIA",
    "VICTIM", "VICTORY", "VIDEO", "VIEW", "VILLAGE", "VIOLENCE", "VISION",
    "VISIT", "VISITOR", "VITAL", "VOICE", "VOLUME", "VOTE", "WAGE", "WAIT",
    "WALK", "WALL", "WANT", "WAR", "WARM", "WARN", "WASH", "WATCH", "WATER",
    "WAVE", "WAY", "WE", "WEAK", "WEAPON", "WEAR", "WEATHER", "WEEK",
    "WEEKEND", "WEIGHT", "WELCOME", "WELFARE", "WELL", "WEST", "WESTERN",
    "WHAT", "WHATEVER", "WHEN", "WHERE", "WHEREAS", "WHETHER", "WHICH",
    "WHILE", "WHILST", "WHITE", "WHO", "WHOLE", "WHOM", "WHOSE", "WHY", "WIDE",
    "WIDELY", "WIFE", "WILD", "WILL", "WIN", "WIND", "WINDOW", "WINE", "WING",
    "WINNER", "WINTER", "WISH", "WITH", "WITHDRAW", "WITHIN", "WITHOUT",
    "WOMAN", "WONDER", "WONDERFUL", "WOOD", "WORD", "WORK", "WORKER",
    "WORKING", "WORKS", "WORLD", "WORRY", "WORTH", "WOULD", "WRITE", "WRITER",
    "WRITING", "WRONG", "YARD", "YEAH", "YEAR", "YES", "YESTERDAY", "YET",
    "YOU", "YOUNG", "YOUR", "YOURSELF", "YOUTH"
]
def triangle_numbers(limit):
    tris = set()
    n = 1
    while True:
        t = n * (n + 1) // 2
        if t > limit:
            break
        tris.add(t)
        n += 1
    return tris

def word_value(word):
    return sum(ord(c.upper()) - 64 for c in word if c.isalpha())

# Compute the maximum possible word value to generate enough triangle numbers
max_word_val = max(len(w) * 26 for w in arr)

tri_set = triangle_numbers(max_word_val)

# Count how many words are triangle words
count = sum(1 for word in arr if word_value(word) in tri_set)
print("Triangle word count:", count)`,
    "162"
  ),
  new EulerProblem(
    43,
    "Sub-string Divisibility",
    "The number, 1406357289, is a 0 to 9 pandigital number because it is made up of each of the digits 0 to 9 in some order, but it also has a rather interesting sub-string divisibility property. Let d1 be the 1st digit, d2 be the 2nd digit, and so on. In this way, we note the following: d2d3d4 = 406 is divisible by 2, d3d4d5 = 063 is divisible by 3, d4d5d6 = 635 is divisible by 5, d5d6d7 = 357 is divisible by 7, d6d7d8 = 572 is divisible by 11, d7d8d9 = 728 is divisible by 13, d8d9d10 = 289 is divisible by 17. Find the sum of all 0 to 9 pandigital numbers with this property.",
    ["pandigital","divisibility"],
    `def join_digits(digits):
  return int(''.join(str(d) for d in digits))

def has_substring_divisibility(p):
  primeArr = [2, 3, 5, 7, 11, 13, 17]
  for i in range(1, 8):  # i from 1 to 7 (positions d2-d4 to d8-d10)
      num = p[i]*100 + p[i+1]*10 + p[i+2]
      if num % primeArr[i-1] != 0:
          return False
  return True

def generate_permutations(arr, start, end, result):
  if start == end:
      result.append(arr[:])
  else:
      for i in range(start, end + 1):
          arr[start], arr[i] = arr[i], arr[start]
          generate_permutations(arr, start + 1, end, result)
          arr[start], arr[i] = arr[i], arr[start]  # backtrack

# Main logic
digits = list(range(10))           # [0, 1, 2, ..., 9]
all_perms = []
generate_permutations(digits, 0, len(digits) - 1, all_perms)

total = 0
for p in all_perms:
  if p[0] == 0:
      continue  # skip numbers that start with 0
  if has_substring_divisibility(p):
      total += join_digits(p)

print("Grand total is:", total)
`,
    "16695334890"
  ),
  new EulerProblem(
    44,
    "Pentagon Numbers",
    "Pentagonal numbers are generated by the formula Pn = n(3n−1)/2. The first ten pentagonal numbers are: 1, 5, 12, 22, 35, 51, 70, 92, 117, 145, ... It can be seen that P4 + P7 = 22 + 70 = 92 = P8. However, their difference, 70 − 22 = 48, is not pentagonal. Find the pair of pentagonal numbers, Pj and Pk, for which their sum and difference are pentagonal and D = |Pk − Pj| is minimised; what is the value of D?",
    ["figurative-number"],
    `import math

def pent(n):
    ans=int(n*((3*n)-1)/2)
    return ans

def is_pentagonal(x):
    n = (math.sqrt(24 * x + 1) + 1) / 6
    return n.is_integer()

def sumCheck(a, b):
    return is_pentagonal(pent(a) + pent(b))

def diffCheck(a, b):
    return is_pentagonal(abs(pent(a) - pent(b)))

for j in range(1, 3000):
    for k in range(j+1, 3000):
        if sumCheck(j, k) and diffCheck(j, k):
            print(j, k, abs(pent(k) - pent(j)))`,
    "5482660"
  ),
  new EulerProblem(
    45,
    "Triangular, Pentagonal, and Hexagonal",
    "// Triangle, pentagonal, and hexagonal numbers are generated by the following formulae: Triangle Tn = n(n+1)/2 , Pentagonal Pn = n(3n−1)/2 , Hexagonal Hn = n(2n−1) . It can be verified that T285 = P165 = H143 = 40755. Find the next triangle number that is also pentagonal and hexagonal.",
    ["figurative-number","triangle-number"],
    `import math

def is_pentagonal(x):
    n = (math.sqrt(24 * x + 1) + 1) / 6
    return n.is_integer()

n = 144  # start from 144 because H_143 = 40755
while True:
    hex_num = n * (2 * n - 1)
    if is_pentagonal(hex_num):
        print("Result is:", hex_num)
        break
    n += 1`,
    "1533776805"
  ),
  new EulerProblem(
    46,
    "Goldbach's other conjecture",
    "It was proposed by Christian Goldbach that every odd composite number can be written as the sum of a prime and twice a square. 9 = 7 + 2×1² 15 = 7 + 2×2² 21 = 3 + 2×3² 25 = 7 + 2×3² 27 = 19 + 2×2² 33 = 31 + 2×1². It turns out that the conjecture was false. What is the smallest odd composite that cannot be written as the sum of a prime and twice a square?",
    ["prime-number","square-number"],
    `import math

def prime_check(n):
    if n < 2:
        return False
    for i in range(2, int(math.sqrt(n)) + 1):
        if n % i == 0:
            return False
    return True

# Check each odd number
for i in range(3, 10000, 2):  # only odd numbers
    if not prime_check(i):  # odd composite
        found = False
        for p in range(2, i):
            if prime_check(p):
                remainder = i - p
                if remainder % 2 == 0:
                    k = int(math.sqrt(remainder // 2))
                    if 2 * k * k == remainder:
                        found = True
                        break
        if not found:
            print("Smallest odd composite not fitting conjecture is:", i)
            break
`,
    "5777"
  ),
  new EulerProblem(
    47,
    "X",
    "The first two consecutive numbers to have two distinct prime factors are: 14 = 2 × 7, 15 = 3 × 5. The first three consecutive numbers to have three distinct prime factors are: 644 = 2² × 7 × 23, 645 = 3 × 5 × 43, 646 = 2 × 17 × 19. Find the first four consecutive integers to have four distinct prime factors each. What is the first of these numbers?",
    ["prime-number","divisibility"],
    `import math

def uniquePrimeFactorsLength(n):
    factors = set()  # use a set for uniqueness

    # Handle factor 2 separately
    while n % 2 == 0:
        factors.add(2)
        n //= 2
    # Handle odd factors
    for i in range(3, int(math.sqrt(n)) + 1, 2):
        while n % i == 0:
            factors.add(i)
            n //= i
    # If n is a prime > 2
    if n > 2:
        factors.add(n)

    return len(sorted(factors))

for i in range(1,10000000):
    if uniquePrimeFactorsLength(i) == 4:
        if uniquePrimeFactorsLength(i+1) == 4:
            if uniquePrimeFactorsLength(i+2) == 4:
                if uniquePrimeFactorsLength(i+3) == 4:
                    print("result is:",i)
                    break`,
    "134043"
  ),
  new EulerProblem(
    48,
    "X",
    "X",
    ["X"],
    `X`,
    "X"
  ),
  new EulerProblem(
    49,
    "X",
    "X",
    ["X"],
    `X`,
    "X"
  ),
  new EulerProblem(
    50,
    "X",
    "X",
    ["X"],
    `X`,
    "X"
  )
];
