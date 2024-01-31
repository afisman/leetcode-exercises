//Symmetric tree #101

var isSymmetric = function (root) {
    return isMirror(root.left, root.right);

};

var isMirror = function (node1, node2) {
    if (node1 == null && node2 == null) return true;


    if (node1 != null && node2 != null && node1.val == node2.val) {
        return (isMirror(node1.left, node2.right) && isMirror(node1.right, node2.left));
    }
}

//Binary tree paths # 257

var binaryTreePaths = function (root) {

    let ans = [];

    if (!root) {
        return [[]];
    }

    let arr = [];

    recBTP(root, arr, ans);

    console.log(ans);
    return ans;

};

function recBTP(root, arr, ans) {
    if (!root) return;
    arr.push(root.val);
    console.log(root.val)

    if (root.left == null && root.right == null) {
        let str = '';
        for (let i = 0; i < arr.length; i++) {
            if (i + 1 == arr.length) {
                str += `${arr[i]}`
            } else {
                str += `${arr[i]}->`
            }
        }
        ans.push(str);
        console.log(ans)
        arr.pop();
        return;
    }

    recBTP(root.left, arr, ans);
    recBTP(root.right, arr, ans);
    arr.pop();

}


//Guess number higher or lower #374

var guessNumber = function (n) {
    var start = 1;
    var end = n;
    while (start <= end) {
        var num = Math.ceil(start + (end - start) / 2);
        var ask = guess(num);
        if (ask == 0) return num;
        else if (ask == -1) end = num - 1;
        else if (ask == 1) start = num + 1;
    }

    return start;


};


//Unique Binary Search Trees #96

var numTrees = function (n) {
    if (n <= 1) {
        return 1;
    }

    let res = 0;

    for (let i = 0; i < n; i++) {
        res += numTrees(i) * numTrees(n - i - 1);
    }

    return res;
};

