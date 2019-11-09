/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    for(let i=0,l=nums.length;i<l;i++){
        for(let j=i+1,l=nums.length;j<l;j++){
            if(nums[i]+nums[j]===target){
                return [i,j];
            }
        }
    }
};
