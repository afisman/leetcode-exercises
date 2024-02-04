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