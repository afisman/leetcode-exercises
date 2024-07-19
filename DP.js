
//Climbing Stairs #70
var climbStairs = function (n) {
    let one = 1
    let two = 1

    if (n == 1) return 1;

    for (let i = n - 1; n > 1; n--) {
        let temp = one
        one = one + two;
        two = temp;
    }

    return one

};

//Coin Change #322

var coinChange = function (coins, amount) {

    let dp = new Array(amount + 1).fill(amount + 1);
    dp[0] = 0;

    for (let i = 1; i <= amount; i++) {
        for (let c of coins) {
            if (i - c >= 0) {
                dp[i] = Math.min(dp[i], 1 + dp[i - c]);
            }
        }
    }

    return dp[amount] !== amount + 1 ? dp[amount] : -1

};

//Best time to buy and sell stock #121

var maxProfit = function (prices) {
    let maxProfit = 0;
    let minVal = Infinity;
    for (let i = 0; i < prices.length; i++) {
        minVal = Math.min(minVal, prices[i]);
        maxProfit = Math.max(maxProfit, prices[i] - minVal)
    }
    return maxProfit;
};

//746 Min cost of climbing stairs

var minCostClimbingStairs = function (cost) {
    cost.push(0);
    for (let i = cost.length - 4; i >= 0; i--) {
        cost[i] += Math.min(cost[i + 1], cost[i + 2]);
    }

    return Math.min(cost[0], cost[1])
};