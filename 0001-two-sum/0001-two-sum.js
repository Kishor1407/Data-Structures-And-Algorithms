// /**
//  * @param {number[]} nums
//  * @param {number} target
//  * @return {number[]}
//  */
// var twoSum = function(nums, target) {
//     let ans=0;
//     for(let i=0;i<nums.length;i++){
//         for(let j=i+1;j<nums.length;j++){
//             if(nums[i]+nums[j]===target){
//                 return [i,j];
//             }
//         }
//     }
    
// };

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(arr, target) {
    let n=arr.length;

    let map={};
    for(let i=0;i<n;i++){
        map[arr[i]]=i;
    }

    for(let i=0;i<n;i++){
        let pairToFind=target-arr[i];
        if(map[pairToFind]  !== undefined  && map[pairToFind] !== i){
            return [i,map[pairToFind]]
        }
    }
    
};