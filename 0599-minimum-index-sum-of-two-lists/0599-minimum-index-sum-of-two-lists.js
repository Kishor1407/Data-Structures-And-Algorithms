var findRestaurant = function(list1, list2) {
    let min = Infinity;
    let ans = [];

    for (let i = 0; i < list1.length; i++) {
        for (let j = 0; j < list2.length; j++) {
            if (list1[i] === list2[j]) {
                let sum = i + j;

                if (sum < min) {
                    min = sum;
                    ans = [list1[i]];   // reset
                } else if (sum === min) {
                    ans.push(list1[i]); // same min
                }
            }
        }
    }
    return ans;
};
