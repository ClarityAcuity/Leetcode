/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    let r=[];
    let l=nums.length;
    for(let i=0;i<=l;i++){
        r.push(i);
    }
    for(let i=0;i<=l;i++){
        r.splice(nums[i],1,0);
    }
    for(let i=0;i<=l;i++){
        if(r[i]===0){
            r.splice(i,1);
            i--;
            l--;
        }
    }
    return r;
};
