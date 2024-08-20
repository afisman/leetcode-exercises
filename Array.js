//Product of array except self #238

var productExceptSelf = function (nums) {
    if (nums.length == 1) {
        return 0;
    }
    let i;
    let temp = 1;

    const prod = Array(nums.length).fill(0);

    for (j = 0; j < nums.length; j++) {
        prod[j] = 1;
    }

    for (i = 0; i < nums.length; i++) {
        prod[i] = temp
        temp *= nums[i]
    }

    temp = 1;

    for (i = nums.length - 1; i >= 0; i--) {
        prod[i] *= temp;
        temp *= nums[i];
    }

    return prod
};

//contains duplicate #217

var containsDuplicate = function (nums) {
    let set = new Set(nums);
    if (set.size == nums.length) {
        return false
    } else {
        return true
    }
};

//Number of good pairs #1512

var numIdenticalPairs = function (nums) {
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] == nums[j]) {
                count++
            }
        }
    }

    return count
};

//Convert sorted array to BST #108

class Node {
    constructor(d) {
        this.val = d;
        this.left = null;
        this.right = null;
    }
}

var sortedArrayToBST = function (nums) {
    if (nums.length === 0) {
        return null;
    }

    const mid = Math.floor(nums.length / 2);
    const root = new Node(nums[mid]);

    const queue = [[root, [0, mid - 1]], [root, [mid + 1, nums.length - 1]]];

    while (queue.length > 0) {
        const [parent, [left, right]] = queue.shift();

        if (left <= right && parent != null) {
            const mid = Math.floor((left + right) / 2);
            const child = new Node(nums[mid]);

            if (nums[mid] < parent.val) {
                parent.left = child;
            } else {
                parent.right = child;
            }

            queue.push([child, [left, mid - 1]]);
            queue.push([child, [mid + 1, right]]);
        }
    }
    return root;
};

//Flatten deeply nested array #2625

//beats 84%

var flat = function (arr, n) {

    let flattened_arr = [];

    const flatten = (nums, m) => {
        for (const num of nums) {
            if (Array.isArray(num) && m > 0) {
                flatten(num, m - 1);
            } else {
                flattened_arr.push(num)
            }
        }
    }

    flatten(arr, n);
    return flattened_arr

};

//beats 10%

var flat = function (arr, n) {


    function* flatten(array, depth) {
        if (depth === undefined) {
            depth = 1;
        }

        for (const val of array) {
            if (Array.isArray(val) && depth > 0) {
                yield* flatten(val, depth - 1);
            } else {
                yield val
            }
        }

    }

    const flattened_arr = [...flatten(arr, n)];

    return flattened_arr

};

//Merge sorted arrays #88

var merge = function (nums1, m, nums2, n) {
    let i = m - 1;
    let j = n - 1;
    let k = m + n - 1;

    while (j >= 0) {
        if (i >= 0 && nums1[i] > nums2[j]) {
            nums1[k--] = nums1[i--]
        } else {
            nums1[k--] = nums2[j--]
        }
    }
};

//Shuffle the Array #1470

var shuffle = function (nums, n) {

    const result = [];
    for (let i = 0; i < n; i++) {
        result.push(nums[i]);
        result.push(nums[i + n])
    }

    return result

};

//Running sum of 1d Array #1480

var runningSum = function (nums) {
    const result = [];
    for (let i = 0; i < nums.length; i++) {
        if (i === 0) {
            result.push(nums[i])
        } else {
            result.push(nums[i] + result[i - 1])
        }
    }

    return result
};

//Average salary Excluding the min and max value #1491

var average = function (salary) {
    let minValue = Math.min(...salary);
    let maxValue = Math.max(...salary);

    let result = 0
    let count = 0

    salary.forEach((el) => {
        if (el !== minValue && el !== maxValue) {
            result += el
            count++
        }
    })

    return result / count
};

//Three consecutive odds #1550

var threeConsecutiveOdds = function (arr) {
    for (let i = 1; i < arr.length - 1; i++) {
        if (arr[i - 1] % 2 !== 0 && arr[i] % 2 !== 0 && arr[i + 1] % 2 !== 0) {
            return true
        }
    }

    return false
};

//Contains Duplicate II #219

var containsNearbyDuplicate = function (nums, k) {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        if (map.has(`${nums[i]}`) !== true) {
            map.set(`${nums[i]}`, i)
        } else {
            if (Math.abs(map.get(`${nums[i]}`) - i) <= k) {
                return true
            } else {
                map.set(`${nums[i]}`, i)

            }
        }
    }

    return false
};

//Group anagrams #49

var groupAnagrams = function (strs) {
    const map = new Map();
    let arr = [];

    for (let i = 0; i < strs.length; i++) {
        let str = strs[i].split('').reverse().sort((a, b) => a > b ? 1 : -1).join('');

        if (map.has(str)) {
            let temp = map.get(str)
            map.set(str, [...temp, strs[i]])
        } else {
            map.set(str, [strs[i]])
        }
    }

    for (const [key, values] of map) {
        arr.push(values)
    }

    return arr
};

//Rotate image #48

var rotate = function (matrix) {
    var n = matrix.length;
    for (var i = 0; i < n / 2; i++) {
        for (var j = i; j < n - i - 1; j++) {
            var tmp = matrix[i][j];
            matrix[i][j] = matrix[n - j - 1][i];
            matrix[n - j - 1][i] = matrix[n - i - 1][n - j - 1];
            matrix[n - i - 1][n - j - 1] = matrix[j][n - i - 1];
            matrix[j][n - i - 1] = tmp;
        }
    }
    return matrix;
};

//Sort students by their Kth score //2545

var sortTheStudents = function (score, k) {


    for (let i = 0; i < score.length; i++) {
        for (let j = 0; j < (score.length - 1) - i; j++) {
            if (score[j][k] < score[j + 1][k]) {
                temp = score[j + 1];
                score[j + 1] = score[j];
                score[j] = temp
            }
        }
    }

    return score
};

var sortTheStudents = function (score, k) {
    const newMatrix = score.sort((a, b) => a[k] < b[k] ? 1 : -1)

    return newMatrix
};

//How many numbers are smaller than the current number #1365

var smallerNumbersThanCurrent = function (nums) {
    let res = [];
    for (let i of nums) {
        let c = nums.reduce((count, num) => {
            if (num < i) count++;
            return count;
        }, 0);
        res.push(c);
    }

    return res;
};

//Maximum number of pairs in array #2341

var numberOfPairs = function (nums) {
    let count = 0;
    let rest = 0;
    let map = new Map();

    for (let i = 0; i < nums.length; i++) {
        if (map.has(nums[i])) {
            let temp = map.get(nums[i]) + 1
            map.set(nums[i], temp)
        } else {
            map.set(nums[i], 1)

        }

    }
    console.log(map)
    for (let [key, values] of map) {
        if (values % 2 === 0) {
            count += values / 2
        } else if ((values - 1) % 2 === 0 && values > 1) {
            rest++;
            count += (values - 1) / 2
        } else {
            rest++
        }
    }

    return [count, rest]
};

var numberOfPairs = function (nums) {
    const m = new Set();
    let pCnt = 0;
    for (const num of nums) {
        if (m.has(num)) {
            m.delete(num);
            pCnt++;
        } else {
            m.add(num);
        }
    }
    return [pCnt, m.size];
};

//Flipping an image #832

var flipAndInvertImage = function (image) {

    for (let i = 0; i < image.length; i++) {
        image[i] = image[i].reverse()
        for (let j = 0; j < image[i].length; j++) {
            if (image[i][j] === 1) {
                image[i][j] = 0
            } else {
                image[i][j] = 1

            }
        }
    }
    return image
};

//Two out of three #2032

var twoOutOfThree = function (nums1, nums2, nums3) {
    let num = [...new Set(nums1), ...new Set(nums2), ...new Set(nums3)]

    let arr = []

    let freq = _.countBy(num)

    let keys = Object.keys(freq)

    keys.forEach(key => {
        if (freq[key] >= 2) {
            arr.push(key)
        }
    })

    return arr
};


//Longest increasing subsequence #300

var lengthOfLIS = function (nums) {
    const dp = new Array(nums.length).fill(1)
    for (let i = 1; i < nums.length; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[j] < nums[i]) {
                dp[i] = Math.max(dp[i], dp[j] + 1);
            }
        }
    }

    return Math.max(...dp)
};

//Majority element #169

var majorityElement = function (nums) {
    let map = new Map()
    let result = 0
    let max = 0;

    for (let i = 0; i < nums.length; i++) {
        if (map.has(nums[i])) {
            let temp = map.get(nums[i]) + 1
            map.set(nums[i], temp)
        } else {
            map.set(nums[i], 1)
        }
    }

    for (let [keys, value] of map) {
        if (value > max) {
            max = value;
            result = keys
        }
    }

    return result
};

//Find median of two sorted arrays #4

var findMedianSortedArrays = function (nums1, nums2) {
    const nums3 = [...nums1, ...nums2].sort((a, b) => a > b ? 1 : -1)
    if (nums3.length % 2 !== 0) {
        let z = Math.floor(nums3.length / 2);
        return nums3[z];
    } else {
        let z = nums3.length / 2;
        let e = nums3[z];
        let q = nums3[z - 1];
        let ans = (e + q) / 2;
        return ans;
    }
};

//Sort the people #2418

var sortPeople = function (names, heights) {
    const map = new Map()
    for (let i = 0; i < heights.length; i++) {
        map.set(heights[i], names[i])
    }

    return [...map.entries()].sort((a, b) => b[0] - a[0]).map(v => v[1])
};

//Most frequent even #2404

var mostFrequentEven = function (nums) {
    let map = new Map()
    let result

    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        if (!(num % 2)) {
            const newValue = map.get(num) + 1;
            map.set(num, map.has(num) ? newValue : 1);
            if (result === undefined || newValue > map.get(result)) {
                result = num
            } else if (map.get(num) === map.get(result)) {
                result = Math.min(num, result)
            }
        }
    }


    return result === undefined ? -1 : result
};

//Similar pair of words #2506

var similarPairs = function (words) {
    let result = 0

    for (let i = 0; i < words.length; i++) {
        for (let j = 0; j < words.length; j++) {
            let firstWord = [...new Set(words[i])].sort((a, b) => (a > b ? 1 : -1)).join('')
            let secondWord = [...new Set(words[j])].sort((a, b) => (a > b ? 1 : -1)).join('')

            if (i !== j && firstWord === secondWord) {
                result++
            }
        }
    }

    return result / 2
};

var similarPairs = function (words) {


    let result = 0;
    let map = new Map();

    for (let word of words) {
        let v = 0;
        for (let i = 0; i < word.length; ++i) v |= 1 << (word.charCodeAt(i) - 97);
        result += map.get(v) || 0
        map.set(v, (map.get(v) || 0) + 1)
    }

    return result
};

//Rearrange array of elements by sign #2149

var rearrangeArray = function (nums) {
    let arr1 = nums.filter(el => el >= 0)
    let arr2 = nums.filter(el => el < 0)
    let arr3 = []

    for (let i = 0; i < arr1.length; i++) {
        arr3.push(arr1[i])
        arr3.push(arr2[i])
    }

    return arr3
};


//1672. Richest Customer Wealth
/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function (accounts) {
    let result = 0;
    for (let i = 0; i < accounts.length; i++) {
        let tempResult = accounts[i].reduce((acc, curr) => acc += curr, 0)
        result = Math.max(result, tempResult)
    }

    return result
};

//661 Smooth image

/**
 * @param {number[][]} img
 * @return {number[][]}
 */
var imageSmoother = function (img) {
    let n = img.length;
    let m = img[0].length;
    let newImg = new Array(n).fill(0).map(() => new Array(m).fill(0));

    const isValid = (i, j) => i >= 0 && i < n && j >= 0 && j < m;

    const getSum = (i, j) => {
        let sum = 0, count = 0;
        for (let x = i - 1; x <= i + 1; x++) {
            for (let y = j - 1; y <= j + 1; y++) {
                if (isValid(x, y)) {
                    sum += img[x][y];
                    count++;
                }
            }
        }
        return Math.floor(sum / count);
    }

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            newImg[i][j] = getSum(i, j);
        }
    }
    return newImg;
};


//80 remove duplicate from II

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    for (let i = nums.length - 1; i > 0; i--) {
        if (nums[i] === nums[i - 1] && nums[i] === nums[i - 2]) {
            nums.splice(i, 1)
        }
    }
    return nums.length;
};

// 1791 Find center of star graph

var findCenter = function (edges) {
    if (edges[0][1] === edges[1][0] || edges[0][1] === edges[1][1]) {
        return edges[0][1];
    } else {
        return edges[0][0];
    }
};

//11 Container with more water

var maxArea = function (height) {
    let maxSum = 0;
    let i = 0;
    let j = height.length - 1;

    while (i < j) {
        let maxHeight = Math.min(height[i], height[j]);
        let volume = maxHeight * (j - i);
        maxSum = Math.max(maxSum, volume);
        if (height[j] > height[i]) {
            i++;
        } else {
            j--;
        }
    }

    return maxSum;
};

//414 Third maximum number

var thirdMax = function (nums) {
    nums = Array.from(new Set(nums));
    nums.sort((a, b) => b - a);

    if (nums.length < 3) {
        return nums[0];
    }

    return nums[2]
};

//1823 Find winner of circular game

var findTheWinner = function (n, k) {
    let circle = [];
    for (let i = 1; i <= n; i++) {
        circle.push(i);
    }

    let current = 0;

    while (circle.length > 1) {
        let next_to_remove = (current + k - 1) % circle.length;
        circle.splice(next_to_remove, 1);
        current = next_to_remove;
    }

    return circle[0]
};

var findTheWinner = function (n, k) {
    let winner = 0;

    for (let i = 2; i <= n; i++) {
        winner = (winner + k) % i;
    }
    return winner + 1;
};

//1598 Crawler log folder

var minOperations = function (logs) {
    let curr = 0;
    for (let i = 0; i < logs.length; i++) {
        if (logs[i] == "../" && curr > 0) {
            curr--;
        } else if (logs[i] != "../" && logs[i] != "./") {
            curr++
        }
    }

    return curr;

};

//506 Relative Ranks

var findRelativeRanks = function (score) {

    let sorted = [...score].sort((a, b) => b - a);

    const ranks = ["Bronze Medal", "Silver Medal", "Gold Medal"];

    const results = [];

    for (let i = 0; i < score.length; i++) {
        let index = score.indexOf(sorted[i])
        if (ranks.length !== 0) {
            results[index] = ranks.pop();
        } else {
            results[index] = `${i + 1}`
        }
    }

    return results;
};

//896 Monotonic array

var isMonotonic = function (nums) {
    let isIncreasing = true;
    let isDecreasing = true;
    for (let i = 1; i < nums.length; i++) {
        if (isDecreasing === false && isIncreasing === false) return false;
        if (nums[i] > nums[i - 1]) {
            isDecreasing = false;
        }

        if (nums[i] < nums[i - 1]) {
            isIncreasing = false;
        }

    }

    return isDecreasing || isIncreasing;
};

// 941 Valid Mountain Array

var validMountainArray = function (arr) {
    if (arr.length < 3) return false;
    let asc;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i + 1] && arr[i + 1] > arr[i] && (asc || asc === undefined)) {
            asc = true;
        } else if (arr[i + 1] && arr[i + 1] < arr[i] && asc) {
            asc = false;
        } else if (arr[i + 1] && arr[i + 1] < arr[i] && asc === false) {
            asc = false
        } else if (arr[i + 1]) {
            return false
        }
    }

    return asc === false
};

//3162 Find the number of good pairs

var numberOfPairs = function (nums1, nums2, k) {
    let goodPairs = 0;

    for (let i = 0; i < nums1.length; i++) {
        for (let j = 0; j < nums2.length; j++) {
            if (nums1[i] % (nums2[j] * k) === 0) {
                goodPairs++;
            }
        }
    }
    return goodPairs;

};

//3184 Count pairs that form a complete day I

var countCompleteDayPairs = function (hours) {
    let count = 0;

    for (let i = 0; i < hours.length - 1; i++) {
        for (let j = i + 1; j < hours.length; j++) {
            if ((hours[i] + hours[j]) % 24 == 0) {
                count++
            }
        }
    }

    return count

};


//2053 kth distinct string in array

var kthDistinct = function (arr, k) {
    let map = new Map();
    for (let i = 0; i < arr.length; i++) {
        let iCount = map.get(arr[i]);
        if (iCount) {
            map.set(arr[i], iCount + 1);
        } else {
            map.set(arr[i], 1)
        }
    }

    let count = 0;

    for (let [key, value] of map) {
        if (value == 1) {
            count++
            if (count == k) {
                return key
            }
        }
    }

    return ""

};

//2667 Chunk array

var chunk = function (arr, size) {
    if (arr.length === 0) return arr;
    if (arr.length === size) return [arr];

    let arr2 = [];
    let i = 0;
    let j = size;

    while (i < arr.length) {
        const tempArr = arr.slice(i, j);
        arr2.push(tempArr);
        i += size;
        j += size;
    }

    return arr2;

};

//1207 Find unique ocurrences

var uniqueOccurrences = function (arr) {
    let map = new Map();

    for (let i = 0; i < arr.length; i++) {
        if (!map.get(arr[i])) {
            map.set(arr[i], 1);
        } else {
            map.set(arr[i], map.get(arr[i]) + 1);
        }
    }
    let arr2 = [];
    for (let [key, value] of map) {
        if (arr2.includes(value)) {
            return false;
        } else {
            arr2.push(value);
        }
    }

    return true;
};


//1636 Frequecy sort

var frequencySort = function (nums) {
    let map = new Map();

    for (let i = 0; i < nums.length; i++) {
        if (!map.get(nums[i])) {
            map.set(nums[i], 1);
        } else {
            map.set(nums[i], map.get(nums[i]) + 1);
        }
    }

    return nums.sort((a, b) => map.get(a) - map.get(b) || b - a)
};

//2724 sort by

var sortBy = function (arr, fn) {
    return arr.sort((a, b) => { return fn(a) - fn(b) })
};


//Arithmetic triplets

var arithmeticTriplets = function (nums, diff) {
    let count = 0;
    for (let num of nums) {
        if (nums.includes(num + diff) && nums.includes(num + diff * 2)) {
            count++
        }
    }

    return count;
};

//Leonade change

var lemonadeChange = function (bills) {

    if (bills[0] !== 5) return false;

    let obj = {
        five: 0,
        ten: 0
    }

    for (let i = 0; i < bills.length; i++) {
        if (bills[i] == 5) {
            obj.five += 5;
        } else if (bills[i] == 20) {
            if (obj.five >= 5 && obj.ten >= 10) {
                obj.five -= 5;
                obj.ten -= 10;
            } else if (obj.five >= 15) {
                obj.five -= 15;
            } else {
                return false;
            }
        } else {
            if (obj.five >= 5) {
                obj.ten += 10;
                obj.five -= 5;
            } else {
                return false;
            }
        }
    }
    return true;
};

//2037 Minimum moves to seat everyone

var minMovesToSeat = function (seats, students) {
    let seats2 = seats.sort((a, b) => a - b);
    let students2 = students.sort((a, b) => a - b);
    let count = 0;

    for (let i = 0; i < seats2.length; i++) {
        if (seats2[i] !== students2[i]) {
            count += Math.abs(seats2[i] - students2[i])
        }
    }
    return count;
};

//1984 Minimum difference bewtween highest and lowest of k scores

var minimumDifference = function (nums, k) {
    nums = nums.sort((a, b) => a - b);
    let minDiff = 8000000000000;

    for (let i = 0; i < nums.length - k + 1; i++) {
        minDiff = Math.min(minDiff, nums[i + k - 1] - nums[i])
    }

    return minDiff;
};

//3190Minimum number of operations to make every element divisible by three

var minimumOperations = function (nums) {
    let count = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] % 3 != 0) {
            count++;
        }
    }
    return count;
};

//2798 Number of employees who met the target

var numberOfEmployeesWhoMetTarget = function (hours, target) {
    let count = 0;

    for (let i = 0; i < hours.length; i++) {
        if (hours[i] >= target) {
            count++;
        }
    }
    return count;
};

//1432 Kids with the greatest number of candies

var kidsWithCandies = function (candies, extraCandies) {
    let arr = [];
    let maxNum = Math.max(...candies);
    for (let i = 0; i < candies.length; i++) {
        arr.push(candies[i] + extraCandies >= maxNum)
    }

    return arr;
};

//2951 Find the peaks

var findPeaks = function (mountain) {
    let arr = [];

    for (let i = 1; i < mountain.length - 1; i++) {
        if (mountain[i] > mountain[i - 1] && mountain[i] > mountain[i + 1]) {
            arr.push(i)
        }
    }

    return arr;

};

//2073 Time required to buy

var timeRequiredToBuy = function (tickets, k) {
    let time = 0;

    for (let i = 0; i < tickets.length; i++) {
        if (i < k) {
            time += Math.min(tickets[i], tickets[k]);
        } else if (i > k) {
            time += Math.min(tickets[i], tickets[k] - 1);
        } else {
            time += tickets[k];
        }
    }

    return time;

};

//2085 Count common words with one occurrence

var countWords = function (words1, words2) {
    let count = 0;
    let map = new Map();
    let n = Math.max(words1.length, words2.length);

    for (let i = 0; i < n; i++) {
        if (words1[i]) {
            let exists = map.get(words1[i]);
            if (!exists) {
                map.set(words1[i], [1, 0])
            } else {
                map.set(words1[i], [exists[0] + 1, exists[1]])
            }
        }

        if (words2[i]) {
            let exists = map.get(words2[i]);
            if (!exists) {
                map.set(words2[i], [0, 1])
            } else {
                map.set(words2[i], [exists[0], exists[1] + 1])
            }
        }
    }

    for (let [key, value] of map) {
        if (value[0] == 1 && value[1] == 1) {
            count++
        }
    }
    return count;
};