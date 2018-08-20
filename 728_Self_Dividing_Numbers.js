/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function(left, right) {
    let list=[];
    for(let i=left;i<=right;i++){
        selfdiv(list,i);
    }
    return list;
};

var selfdiv=function(list,num){
    let str = num.toString();
    let sl =str.length;
    let div =false;
    for(let i=0;i<sl;){
        let dnum=Number(str.charAt(i));
        console.log(str,dnum);
        if(dnum!==0){
            if(num%dnum===0){
                i++;
            }else{
                break;
            }
            if(i===sl){
                div=true;
            }
        }else{
            break;
        }
    }
    if(div){
        list.push(num);
    }
}
