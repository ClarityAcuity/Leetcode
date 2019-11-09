/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let r='';
    let o = {};
    for(let i=0;i<nums.length;i++){
        if(o[nums[i].toString()]===undefined){
            o[nums[i].toString()]=nums[i].toString();
        }else{
            o[nums[i].toString()]='';
        }
    }
    for(let prop in o){
        r+=o[prop];
    }
    return parseInt(r,10);
};
