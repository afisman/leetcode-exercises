//Missing number #268

var missingNumber = function (nums) {
    const realSum = nums.reduce((el, acc) => (
        acc += el
    ))
    const expectedSum = (nums.length * (nums.length + 1)) / 2;
    return expectedSum - realSum
};


//Number of 1 bits #191

var hammingWeight = function (n) {
    let res = 0;
    while (n) {
        res += n & 1;
        n = n >>> 1;
    }
    return res;
};

var hammingWeight = function (n) {
    let str = n.toString(2);
    let count = 0;

    console.log(str)

    for (let i = 0; i < str.length; i++) {
        console.log(i)
        if (str[i] == 1) {
            count++
        }
    }

    return count;
};

//Sum of two integers #371

var getSum = function (a, b) {
    while (b != 0) {
        let carry = a & b;

        a = a ^ b;

        b = carry << 1;
    }

    return a
};

//Divide two integers #29

var divide = function (dividend, divisor) {

    let sign = Math.sign(divisor) !== Math.sign(dividend);

    dividend = Math.abs(dividend);
    divisor = Math.abs(divisor);

    let quotient = 0;
    while (divisor <= dividend) {
        let value = divisor;
        let multiple = 1;
        while (value + value <= dividend) {
            value += value;
            multiple += multiple
        }
        dividend = dividend - value;
        quotient += multiple;
    }


    if (quotient > ((2 ** 31) - 1)) {
        return sign ? -(2 ** 31) : 2 ** 31 - 1
    }

    return sign ? -quotient : quotient
}

//Sort by bits #1356

var sortByBits = function (arr) {
    const res = new Array(arr.length);

    for (let i = 0; i < arr.length; i++) {
        res[i] = countBit(arr[i]) * 10001 + arr[i];
    }

    res.sort((a, b) => a - b);

    for (let i = 0; i < arr.length; i++) {
        res[i] %= 10001;
    }

    return res
};

function countBit(n) {
    let res = 0;
    while (n !== 0) {
        res += (n & 1);
        n >>= 1;
    }
    return res;
}


//Binary number with alternating bits #693

var hasAlternatingBits = function (n) {
    let temp = '';

    let binary = (n >>> 0).toString(2);

    console.log(typeof (binary))

    for (let i = 0; i < binary.length; i++) {
        if (temp === binary[i]) {
            return false
        }

        temp = binary[i]
    }
    return true
};