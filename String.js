//Valid anagram #242

var isAnagram = function (s, t) {
    let sArr = s.split('').sort((a, b) => a < b ? -1 : 1)
    let tArr = t.split('').sort((a, b) => a < b ? -1 : 1)


    if (sArr.join('') === tArr.join('')) {
        return true
    } else { return false }

};

var isAnagram = function (s, t) {
    if (s.length !== t.length) return false;

    const charMap = Array(26).fill(0);

    for (let i = 0; i < s.length; i++) {
        charMap[s.charCodeAt(i) - 'a'.charCodeAt(0)]++;
        charMap[t.charCodeAt(i) - 'a'.charCodeAt(0)]--;
    }

    return charMap.every(count => count === 0);

};

//Integer to roman #12

var intToRoman = function (num) {

    if (num == 0) {
        return '';
    }

    for (let i = 0; i < romanMatrix.length; i++) {
        if (num >= romanMatrix[i][0]) {
            return romanMatrix[i][1] + intToRoman(num - romanMatrix[i][0])
        }
    }

};

var romanMatrix = [
    [1000, 'M'],
    [900, 'CM'],
    [500, 'D'],
    [400, 'CD'],
    [100, 'C'],
    [90, 'XC'],
    [50, 'L'],
    [40, 'XL'],
    [10, 'X'],
    [9, 'IX'],
    [5, 'V'],
    [4, 'IV'],
    [1, 'I'],
];


//Find the index of first occurence in a string #28

var strStr = function (haystack, needle) {
    let k = 0;

    for (let i = 0; i < haystack.length; i++) {
        if (haystack[i] == needle[k]) {
            k++;
            if (k == needle.length) {
                return i - (k - 1);
            }
        } else {
            i = i - (k);
            k = 0;
        }
    }
    return -1;
};

//Roman to integer #13

var romanToInt = function (s) {
    let arr = s.split('');
    let r = 0

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == 'I' && arr[i + 1] == 'V') {
            r--
        } else if (arr[i] == 'I' && arr[i + 1] == 'X') {
            r--
        } else if (arr[i] == 'I') {
            r++
        } else if (arr[i] == 'V') {
            r += 5
        } else if (arr[i] == 'X' && arr[i + 1] == 'L') {
            r -= 10
        } else if (arr[i] == 'X' && arr[i + 1] == 'C') {
            r -= 10
        } else if (arr[i] == 'X' && arr[i + 1] == 'D') {
            r -= 10
        } else if (arr[i] == 'X') {
            r += 10
        } else if (arr[i] == 'L') {
            r += 50
        } else if (arr[i] == 'C' && arr[i + 1] == 'D') {
            r -= 100
        } else if (arr[i] == 'C' && arr[i + 1] == 'M') {
            r -= 100
        } else if (arr[i] == 'C') {
            r += 100
        } else if (arr[i] == 'D') {
            r += 500
        } else if (arr[i] == 'M') {
            r += 1000
        }
    }
    return r
};


//Shuffle string #1528

var restoreString = function (s, indices) {
    const arr = new Array(s.length)
    for (let i = 0; i < indices.length; i++) {
        arr[indices[i]] = s[i]
    }

    return arr.join('')

};

//Jewels and stones #771

var numJewelsInStones = function (jewels, stones) {
    let map = new Map();
    let count = 0;

    jewels.split('').forEach((el) => {
        map.set(el, 0)
    })

    for (let i = 0; i < stones.length; i++) {
        if (map.has(stones[i])) {
            let temp = map.get(stones[i]) + 1
            map.set(stones[i], temp)
        }
    }


    map.forEach((values, keys) => {
        count += values
    })

    return count
};

//Sort vowels in a string #2785

const vowels = {
    "a": "a",
    "e": "e",
    "i": "i",
    "o": "o",
    "u": "u",
    "A": "A",
    "E": "E",
    "I": "I",
    "O": "O",
    "U": "U",
}
var sortVowels = function (s) {
    let temp = [];
    let indexArr = [];
    let output = [];

    for (let i = 0; i < s.length; i++) {
        const character = s[i];
        if (vowels[character]) {
            temp.push(character);
            indexArr.push(i)
        } else {
            output[i] = character;
        }
    }
    temp = temp.sort();
    for (let i = 0; i < indexArr.length; i++) {
        output[indexArr[i]] = temp[i];
    }
    return output.join('');
};

//Decode message #2325

var decodeMessage = function (key, message) {
    const map = new Map();

    let newMessage = ''


    let arr = key.split('')
    arr = arr.filter((el, index) => el !== ' ' && arr.indexOf(el) === index)


    for (let i = 0; i < arr.length; i++) {
        let char = String.fromCharCode(i + 97)
        map.set(arr[i], char)
    }
    for (let i = 0; i < message.length; i++) {
        if (message[i] === ' ') {
            newMessage += message[i]
        } else {
            newMessage += map.get(message[i])

        }
    }

    return newMessage
};

//Valid palindrome II #680

var validPalindrome = function (s, corrections = 1) {
    let lo = 0;
    let hi = s.length - 1;

    while (lo < hi) {
        if (s[lo] === s[hi]) {
            lo++;
            hi--;
            continue;
        }

        if (corrections === 0) {
            return false;
        }

        return validPalindrome(s.slice(lo, hi), 0)
            || validPalindrome(s.slice(lo + 1, hi + 1), 0);
    }

    return true;
};

//Check pangram #1832

var checkIfPangram = function (sentence) {

    if (sentence.length < 26) {
        return false
    }

    let map = new Map()

    for (let i = 0; i < sentence.length; i++) {
        if (!map.has(sentence[i])) {
            map.set(sentence[i], 1)
        }
    }

    if (map.size === 26) {
        return true
    } else {
        return false
    }

};