/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    var temp = [];
    var product = 1;
    for(var i=0; i<nums.length; i++){
        temp[i] = product;
        product *= nums[i];
    }
    console.log(temp)
    product = 1;
    for(var i=nums.length-1; i>=0; i--){
        temp[i] *= product;
        product *= nums[i];
    }
    return temp;
};
