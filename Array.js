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

