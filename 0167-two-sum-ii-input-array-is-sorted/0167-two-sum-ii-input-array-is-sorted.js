/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(arr, target) {
    let i=0;
    let j=arr.length-1;

    while(i<j){
        if(arr[i]+arr[j] >target){
            --j;
        }else if(arr[i]+arr[j] < target){
            ++i;
        }else if(arr[i] +arr[j] === target){
            return [i+1,j+1];
        }
    }
};