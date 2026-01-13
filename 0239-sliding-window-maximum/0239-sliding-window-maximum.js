/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */


var maxSlidingWindow = function(arr, k) {
    let res = [];
    let q = [];

    let i = 0, j = 0;

    while (j < arr.length) {

        // remove smaller elements from back
        while (q.length && arr[j] > q[q.length - 1]) {
            q.pop();
        }

        // ✅ PUSH current element
        q.push(arr[j]);

        // when window size reached
        if (j >= k - 1) {
            res.push(q[0]);

            // remove outgoing element
            if (arr[i] === q[0]) q.shift();
            i++;
        }

        j++;
    }

    return res;
};
