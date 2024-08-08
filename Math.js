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