/**
 * @param {number} num
 * @return {number[]}
 */
/*var countBits = function(num) {
    let r = [];
    for(let i=0;i<=num;i++){
        let s = i.toString(2);
        r.push(s.replace(/[0]/g,'').length);
    }
    return r;
};*/
var countBits = function(num) {
    let r = [0,1];
    let n = 2;
    for(let i=0;i<=num;i++){
        if(i===n){
            let a = r.map(x=>x+1);
            r=r.concat(a);
            n*=2;
            c=0;
        }
    }
    r = r.slice(0,num+1);
    return r;
};
