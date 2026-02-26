/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function(nums) {
    let max=nums[0];
    let maxIndex=0;
    for(let i=0;i<nums.length;i++){
        if(nums[i]>max){
            max=nums[i];
            maxIndex=i;
        }
    }
    for(let i=0;i<nums.length;i++){
        if(i!=maxIndex){
            if(2*nums[i] > nums[maxIndex]){
                return -1;
            }
            
        }
    }

    return maxIndex;

};