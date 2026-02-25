/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function(arr) {
    if (arr.length === 0) return 0;

    let count = 1;      // current increasing length
    let maxCount = 1;   // maximum length found

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i + 1] > arr[i]) {
            count++;              // continue increasing sequence
        } else {
            count = 1;            // reset when sequence breaks
        }

        maxCount = Math.max(maxCount, count);
    }

    return maxCount;
};