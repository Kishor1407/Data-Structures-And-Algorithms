/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
var findPoisonedDuration = function(arr, td) {
    if (arr.length === 0) return 0;

    let total = 0;

    for (let i = 0; i < arr.length - 1; i++) {
        total += Math.min(td, arr[i + 1] - arr[i]);
    }

    // last attack always adds full duration
    total += td;

    return total;
};