/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    let r = [];
    let n = nums.length;
    for(let i=0;i<Math.pow(2,n);i++){
        let s = [];
        let str = i.toString(2);
        let zeros = '';
        for(let a=0;a<n-str.length;a++){
            zeros += '0';
        }
        str=zeros+str;
        for(let j=0;j<n;j++){
            if(str.charAt(j) === '1'){
                s.push(nums[j]);
            }
        }
        r.push(s);
    }
    return r;
};
