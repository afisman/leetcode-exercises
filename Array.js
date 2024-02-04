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