//Counter 2620

var createCounter = function (n) {
    return function () {
        return n++;

    };
};

//Reverse integer #7

var reverse = function (x) {
    if (x > 0) {
        let rev = Number(x.toString().split('').reverse().join(''))
        if (rev < (Math.pow(2, 31) * -1) || rev > Math.pow(2, 31) - 1) return 0;
        return rev
    } else {
        x = Math.abs(x);
        let rev = Number(x.toString().split('').reverse().join(''))
        if (rev < (Math.pow(2, 31) * -1) || rev > Math.pow(2, 31) - 1) return 0;

        return -rev

    }
};

//Happy number #202

var isHappy = function (n) {
    let nString = n.toString();

    return checkValid(nString, new Set())


};

function checkValid(nString, prevNums) {

    if (nString === '1') return true;

    if (prevNums.has(nString)) return false;

    prevNums.add(nString);

    let newN = 0

    for (let num of nString.split('')) {
        newN += num ** 2;
    }

    return checkValid(newN.toString(), prevNums)
}

//Adds digits #258

var addDigits = function (num) {
    let z = num.toString();
    let y = 0;
    let i

    if (z.length === 1) {
        return +z
    }

    for (i = 0; i < z.length; i++) {
        y += +z[i];
    }

    return addDigits(y)

};

//Find the maximum achievable number #2769

var theMaximumAchievableX = function (num, t) {
    let x;

    for (let i = 1; i <= t; i++) {
        x = num + i
    }

    return x + t
};

//Count operations to obtain Zero #2169

var countOperations = function (num1, num2) {
    let count = 0
    while (num1 && num2 !== 0) {
        num1 > num2 ? (num1 -= num2) : (num2 -= num1);
        count++
    }

    return count
};

//Determine color of a chessboard square #1812

var squareIsWhite = function (coordinates) {
    let x = coordinates.charCodeAt(0) - 96;
    return (x + Number(coordinates[1])) % 2 === 0 ? false : true
};

//Closet divisors #1362

var closestDivisors = function (num) {
    let x = largestDivisor(num + 1);
    let y = largestDivisor(num + 2);
    const r1 = (num + 1) / x;
    const r2 = (num + 2) / y;

    return Math.abs(x - r1) < Math.abs(y - r2) ? [x, r1] : [y, r2];




};

const largestDivisor = (num) => {
    let sqrt = Math.floor(Math.sqrt(num));
    while (num % sqrt !== 0) sqrt--;

    return sqrt
}


//2160. Minimum Sum of Four Digit Number After Splitting Digits

/**
 * @param {number} num
 * @return {number}
 */
var minimumSum = function (num) {
    let arr = num.toString().split('').sort((a, b) => a - b)
    return (Number(arr[0] + arr[2])) + (Number(arr[1] + arr[3]))
};

//2582 Pass the pillow

var passThePillow = function (n, time) {

    time = time % ((n - 1) * 2);

    if (time <= (n - 1)) {
        return 1 + time;
    }
    else {
        time -= (n - 1);

        return n - time;
    }

};

//263 Ugly number

var isUgly = function (n) {
    while (n > 1) {
        if (n % 2 == 0) {
            n = n / 2;
        } else if (n % 3 == 0) {
            n = n / 3;
        } else if (n % 5 == 0) {
            n = n / 5;
        } else {
            break;
        }
    }

    return n == 1;
};

//326 Power of three

var isPowerOfThree = function (n) {
    while (n > 1) {
        if (n % 3 == 0) {
            n = n / 3
        } else {
            break;
        }
    }

    return n == 1
};

//342 Power of four

var isPowerOfFour = function (n) {
    while (n > 1) {
        if (n % 4 == 0) {
            n = n / 4;
        } else {
            break
        }
    }

    return n == 1
};

//2549 Count distinct numbers on the board
var distinctIntegers = function (n) {
    return n == 1 ? 1 : n - 1
};

//2894 difference of sums

var differenceOfSums = function (n, m) {
    let num1 = 0;
    let num2 = 0;

    for (let i = 1; i <= n; i++) {
        if (i % m == 0) {
            num2 += i
        } else {
            num1 += i
        }
    }

    return num1 - num2;

};

//Substract product and sum

var subtractProductAndSum = function (n) {
    let mul = 1;
    let sum = 0;


    n.toString().split('').forEach((num) => {
        sum = +num + sum;
        mul = +num * mul;
    });
    return (mul - sum);
};

var subtractProductAndSum = function (n) {
    let sum = 0;
    let pro = 1;
    let arr = n.toString().split('');

    while (n > 0) {
        const dig = n % 10
        sum += dig;
        pro *= dig;

        n = Math.floor(n / 10)
    }

    return pro - sum;

};

//Can Alice win the numbers game

var canAliceWin = function (nums) {
    let aCount = 0;
    let bCount = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < 10) {
            aCount += nums[i];
        } else {
            bCount += nums[i];
        }
    }

    return aCount !== bCount;

};

//728 Self dividing numbers

var selfDividingNumbers = function (left, right) {
    let result = []
    for (let i = left; i <= right; i++) {
        if (isSelfDividing(i)) {
            result.push(i)
        }
    }

    return result

};

var isSelfDividing = function (number) {
    let arr = number.toString().split('');
    let result = true;
    for (let i = 0; i < arr.length; i++) {
        if (number % Number(arr[i]) !== 0) {
            result = false;
        }
    }

    return result;
}

//1323 maximum 69 number

var maximum69Number = function (num) {
    let arr = num.toString().split('');

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === '6') {
            arr[i] = '9';
            return Number(arr.join(''));
        }
    }

    return num;

};

//2578 Split with minimum sum

var splitNum = function (num) {
    let newStr = num.toString().split('').sort((a, b) => a - b);
    let sum1 = '';
    let sum2 = '';

    for (let i = 0; i < newStr.length; i++) {
        if (i == 0 || i % 2 == 0) {
            sum1 = sum1 + newStr[i];
        } else {
            sum2 = sum2 + newStr[i];
        }
    }

    return parseInt(sum1) + parseInt(sum2);

};

//1025 Divisor game

var divisorGame = function (n) {
    let count = 0;
    while (n > 1) {
        n -= 1
        count++
    }
    return count % 2 !== 0

};

var divisorGame = function (n) {
    return n % 2 === 0
};

//2544 Alternating digit sum

var alternateDigitSum = function (n) {
    let sum = 0;
    let arr = n.toString().split('');

    for (let i = 0; i < arr.length; i++) {
        if (i === 0 || i % 2 === 0) {
            sum += Number(arr[i]);
        } else {
            sum -= Number(arr[i]);
        }
    }
    return sum;
};

//292 Nim game

var canWinNim = function (n) {
    return n % 4;
};

//507 Check perfect number

var checkPerfectNumber = function (num) {
    if (num % 2) return false
    let sum = 0;
    let x = 1;
    while (x <= num / 2) {
        if (num % x === 0) {
            sum += x;
        }
        x++
    }
    return sum === num
};

//2396 Strictly palindromic number

var isStrictlyPalindromic = function (n) {
    for (let i = 2; i <= n - 2; i++) {
        if (!isPalindromic(parseInt(n, i))) {
            return false;
        }
    }

    return true;
};

var isPalindromic = function (n) {
    let n2 = n.toString().split('').reverse().join('');

    return Number(n2) === n;
}