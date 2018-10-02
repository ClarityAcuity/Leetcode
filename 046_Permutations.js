/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    let l = nums.length;
    let num = nums.shift();
    let r = [[num]];
    let slot=2;
    while(nums.length){
        num = nums.shift();
        r=fill(r,slot,num);
        slot++;
        //console.log('nums=',nums,'num=',num,'r=',r)
    } 
    return r;
};

function fill(pr,slot,num){
    //console.log(pr,slot,num)
    let r = [];
    for(let i=0,l=pr.length;i<l;i++){
        for(let j=0;j<slot;j++){
        let t = pr[i].slice(0);
            t.splice(j,0,num);
            r.push(t);
            //console.log(j,t,r)
        }
    }
    return r;
}