var findShortestSubArray = function(nums) {
    const count = {};
    const first = {};
    const last = {};

    for (let i = 0; i < nums.length; i++) {
        const n = nums[i];

        if (first[n] === undefined) {
            first[n] = i;
        }

        last[n] = i;
        count[n] = (count[n] || 0) + 1;
    }

    let degree = Math.max(...Object.values(count));
    let minLen = nums.length;

    for (let n in count) {
        if (count[n] === degree) {
            minLen = Math.min(minLen, last[n] - first[n] + 1);
        }
    }

    return minLen;
};
