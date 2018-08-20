/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {
    let l =moves.length;
    let x=0;
    let y=0;
    for(let i=0;i<l;i++){
        switch(moves.charAt(i)){
            case 'U':
                y++;
                break;
            case 'D':
                y--;
                break;
            case 'L':
                x--;
                break;
            case 'R':
                x++;
                break;
        }
    }
    if(x===0&&y===0){
        return true;
    }else{
        return false;
    }
};
