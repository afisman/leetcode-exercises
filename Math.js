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