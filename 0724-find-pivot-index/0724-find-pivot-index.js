/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(arr) {
    for (let i = 0; i < arr.length; i++) {
        let sumi = 0;
        let sumj = 0;
        for (let k = 0; k < i; k++) {
            sumi += arr[k];
        }
        for (let j = i + 1; j < arr.length; j++) {
            sumj += arr[j];
        }
        if (sumi === sumj) {
            return i;
        }
    }
    return -1;
};