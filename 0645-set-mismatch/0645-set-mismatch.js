/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {

    let n = nums.length;
    let duplicate = 0;
    let missing = 0;

    for (let i = 1; i <= n; i++) {

        let count = 0;

        for (let j = 0; j < n; j++) {
            if (nums[j] === i) {
                count++;
            }
        }

        if (count === 2) duplicate = i;
        if (count === 0) missing = i;
    }

    return [duplicate, missing];
};