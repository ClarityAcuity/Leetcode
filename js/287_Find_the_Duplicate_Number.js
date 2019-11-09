/**
 * best solution
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    let s = nums[0];
    let f = nums[nums[0]];
    while(s!==f){
        s = nums[s];
        f = nums[nums[f]];
    }
    f=0;
    while(f!==s){
        f = nums[f];
        s = nums[s];
    }
    return s;
};

/**
 * my solution
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    let l = nums.length;
    for(let i=0;i<l;i++){
        for(let j=i+1;j<l;j++){
            if(nums[i]===nums[j]){
                return nums[i];
            }
        }
    }
};