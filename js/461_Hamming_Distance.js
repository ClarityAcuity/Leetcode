/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
    let d=0;
    let bx= bnum(x);
    let by= bnum(y);
    let l= bx.length>by.length? bx.length:by.length;
    for(let i=0;i<l;i++){
        xi=(bx[i]!==undefined)? bx[i]:0;
        yi=(by[i]!==undefined)? by[i]:0;
        if(xi!==yi){
            d++;
        }
    }
    return d;
};

var bnum = function(num){
    let arr=[];
    while(num>0){
        arr.push(num%2);
        num=(num%2!==0)? Math.round(num/2)-1:num/2;
    }
    return arr;
};
