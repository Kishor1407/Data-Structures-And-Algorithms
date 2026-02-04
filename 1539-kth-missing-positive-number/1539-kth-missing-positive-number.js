var findKthPositive = function(arr, k) {
    let missingCount = 0;
    let current = 1;
    let i = 0;

    while (missingCount < k) {
        if (i < arr.length && arr[i] === current) {
            i++; // number exists in array
        } else {
            missingCount++; // missing number found
            if (missingCount === k) return current;
        }
        current++;
    }
};
