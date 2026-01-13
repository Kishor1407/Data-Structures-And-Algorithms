/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(arr) {
    let n = arr.length;
    let maxL = [];
    let maxR = [];

    maxL[0] = arr[0];
    maxR[n - 1] = arr[n - 1];

    for (let i = 1; i < n; i++) {
        maxL[i] = Math.max(maxL[i - 1], arr[i]);
        maxR[n - 1 - i] = Math.max(arr[n - 1 - i], maxR[n - i]);
    }

    let ans = 0;
    for (let i = 0; i < n; i++) {
        let wT = Math.min(maxL[i], maxR[i]) - arr[i];
        if (wT > 0) ans += wT;
    }

    return ans;
};
