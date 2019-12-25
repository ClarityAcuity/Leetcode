/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    let r=[];
    for(let i=1;i<n+1;i++){
        let s='';
        if(i%3===0){
            s+='Fizz';
        }
        if(i%5==0){
            s+='Buzz';
        }
        if(s!==''){
            r.push(s);
        }else{
            r.push((i).toString());
        }
    }
    return r;
};
