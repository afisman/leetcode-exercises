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

//Check if all characters have equal number of ocurrences #1941

var areOccurrencesEqual = function (s) {
    let map = new Map()

    for (let i = 0; i < s.length; i++) {
        if (map.has(s[i])) {
            let temp = map.get(s[i]) + 1

            map.set(s[i], temp)
        } else {

            map.set(s[i], 1)
        }

    }

    let result = true

    let ocurrence

    for (let i = 0; i < s.length; i++) {
        if (i === 0) {
            ocurrence = map.get(s[i])
        }

        if (map.get(s[i]) !== ocurrence) {
            return false
        }
    }

    return result
};

//Is subsequence #392

var isSubsequence = function (s, t) {
    let currentIndex = -1;
    for (let i = 0; i < s.length; i++) {
        const target = t.indexOf(s[i], currentIndex + 1);
        if (target > currentIndex) {
            currentIndex = target;
        } else {
            return false;
        }
    }

    return true;
};

//longest common subsequence #1143

var longestCommonSubsequence = function (text1, text2) {
    const [len1, len2] = [text1.length, text2.length];
    const dp = Array.from({ length: len1 + 1 }, () => new Array(len2 + 1).fill(0))

    for (let i = 1; i < len1 + 1; i++) {
        for (let j = 1; j < len2 + 1; j++) {
            if (text1[i - 1] === text2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1
            } else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1])
            }
        }
    }
    return dp[len1][len2]
};

//Letter combination of phone number #17

var letterCombinations = function (digits) {
    if (!digits) {
        return [];
    }


    let keyboard = {
        2: ['a', 'b', 'c'],
        3: ['d', 'e', 'f'],
        4: ['g', 'h', 'i'],
        5: ['j', 'k', 'l'],
        6: ['m', 'n', 'o'],
        7: ['p', 'q', 'r', 's'],
        8: ['t', 'u', 'v'],
        9: ['w', 'x', 'y', 'z']
    }

    const iterate = (nums) => {
        let arr = []
        if (nums.length == 1) return keyboard[nums]
        let first = nums.slice(0, 1)
        let others = iterate(nums.slice(1))

        for (let digit of keyboard[first]) {
            for (let pairDigit of others) {
                arr.push(digit + pairDigit)
            }
        }
        return arr
    }
    return iterate(digits)
};

//2828 is Acronym

/**
 * @param {string[]} words
 * @param {string} s
 * @return {boolean}
 */
var isAcronym = function (words, s) {
    let resultArr = '';

    for (const word of words) {
        resultArr += word[0];
    }

    return resultArr === s;

};

//Ransom note

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
    if (ransomNote.length > magazine.length) return false;

    let map = new Map();
    for (let i = 0; i < magazine.length; i++) {
        let inMap = map.get(magazine[i]);
        if (inMap) {
            map.set(magazine[i], inMap + 1)
        } else {
            map.set(magazine[i], 1);
        }
    }

    let map1 = new Map();

    for (let i = 0; i < ransomNote.length; i++) {
        let inMap = map1.get(ransomNote[i]);
        if (inMap) {
            map1.set(ransomNote[i], inMap + 1)
        } else {
            map1.set(ransomNote[i], 1);
        }
    }

    let canWrite = true;

    for (let [key, value] of map1) {
        if (map1.get(key) > map.get(key) || !map.get(key)) {
            canWrite = false;
        }
    }

    return canWrite
};

//1704 Halves are alike

/**
 * @param {string} s
 * @return {boolean}
 */
var halvesAreAlike = function (s) {
    let str1 = s.slice(0, s.length / 2);
    let str2 = s.slice(s.length / 2, s.length);

    let count1 = 0;
    let count2 = 0;

    for (let i = 0; i < str1.length; i++) {
        if (isVowel(str1[i])) {
            count1++;
        }
        if (isVowel(str2[i])) {
            count2++;
        }
    }

    return count1 === count2;
};

var isVowel = (x) => {
    if (x === 'a' || x === 'e' || x === 'i' || x === 'o' || x === 'u' || x === 'A' || x === 'E' || x === 'I' || x === 'O' || x === 'U') {
        return true
    } else {
        return false
    }
}

//290 Word pattern

/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pattern, s) {
    let map = new Map();

    let arr = s.split(' ');

    if (arr.length !== pattern.length) return false

    for (let i = 0; i < pattern.length; i++) {
        let inMap = map.get(pattern[i])
        if (!inMap) {
            if (!keyValue(map, arr[i])) {
                map.set(pattern[i], arr[i]);
            } else {
                return false;
            }
        } else if (map.get(pattern[i]) !== arr[i]) {
            console.log(map.get(pattern[i]), arr[i], i)
            return false;
        }

    }

    return true;
};



function keyValue(map, searchKey) {
    for (const [key, value] of map.entries()) {
        console.log(searchKey, key)
        if (value === searchKey)
            return key;
    }
    return undefined;
}

//520 Detect Capital

var detectCapitalUse = function (word) {
    let upper = word.toUpperCase();
    let lower = word.toLowerCase();
    let oneChar = word.substring(0, 1).toUpperCase() + word.substring(1).toLowerCase();
    if (upper === word || lower === word || oneChar === word) return true;
    return false;
};


//819 Most common word

var mostCommonWord = function (paragraph, banned) {

    let arr = paragraph.toLowerCase().replace(/[^\w\s]/g, ' ').split(' ');
    let map = new Map();

    for (let i = 0; i < arr.length; i++) {
        let numOfTimes = map.get(arr[i]);
        if (numOfTimes) {
            map.set(arr[i], (numOfTimes + 1));
        } else {
            map.set(arr[i], 1)
        }
    }

    let max = 0;
    let result = '';

    for (let [key, value] of map) {
        if (!banned.includes(key) && value > max && key !== '') {
            max = value;
            result = key;
        }
    }

    return result;
};