/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function(arr) {
    let n = arr.length;
    let count = 0;
    for (let i = 0; i < n; i++) {
        if (arr[i] === 0) {
            count++;
        }
    }
    let i = n - 1;
    let j = n + count - 1;

    while (i >= 0) {
        if (j < n) {
            arr[j] = arr[i];
        }

        if (arr[i] === 0) {
            j--;
            if (j < n) {
                arr[j] = 0;
            }
        }

        i--;
        j--;
    }
};