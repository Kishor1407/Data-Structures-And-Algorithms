/**
 * @param {number[]} nums
 * @return {number}
 */
var differenceOfSum = function(nums) {
    let sum=0;
    let s=0;
    for(let i=0; i<nums.length;i++){
        sum=sum+nums[i];
        while(nums[i]){
            let n=nums[i]%10;
            s=s+n;
            nums[i]=Math.floor(nums[i]/10);
        }
    }
    return Math.abs(sum-s);
};