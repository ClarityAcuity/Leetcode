/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    //console.log(grid);
    var count=0;
    var num=0;
    var lp, up, rp, h, w;
    h=grid.length;
    if(h>0){
        w=grid[0].length;
    }else{ 
        w=0;
    }
    function ch(array,i,j){
        if(j>0&&array[i][j-1]==1){
            array[i][j-1]=array[i][j];
            ch(array,i,j-1);
        }
        if(i>0&&array[i-1][j]==1){
            array[i-1][j]=array[i][j];
            ch(array,i-1,j);
        }
        if(j<w-1&&array[i][j+1]==1){
            array[i][j+1]=array[i][j];
            ch(array,i,j+1);
        }
        if(i<h-1&&array[i+1][j]==1){
            array[i+1][j]=array[i][j];
            ch(array,i+1,j);
        }
    }
    num=2;
    for(var i=0;i<h;i++){
        for(var j=0;j<w;j++){
            if(grid[i][j]==1){
                grid[i][j]=num;
                ch(grid,i,j);
                num++;
            }
        }
    }
    console.log(grid);
    count=num-2;
    return count;
};
