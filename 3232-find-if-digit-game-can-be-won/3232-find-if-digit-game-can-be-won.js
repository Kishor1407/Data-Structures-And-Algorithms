/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canAliceWin = function(nums) {
    let count1=0;
    let count2=0;

    for(let i=0;i<nums.length;i++){
        if(nums[i]>=10){
            count1 = count1+nums[i];
        }else{
            count2=count2+nums[i];
        }
    }
    return count1 != count2;
};