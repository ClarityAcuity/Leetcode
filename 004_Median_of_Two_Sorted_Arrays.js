/**
 * not O(log(m+n))
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let l1 = nums1.length;
    let l2 = nums2.length;
    let tl = l1 + l2;
    let c1 = 0;
    let c2 = 0;
    let m = 0;
    let pm = 0;
    let isodd = tl%2===0? false:true;
    let loops = parseInt(tl/2, 10)+1;
    for(let i=0;i<loops;i++){
        let end1 = c1<l1? false:true;
        let end2 = c2<l2? false:true;
        pm = m;
        //console.log(end1,end2);
        if(end1===false&&end2===true){
            m = nums1[c1];
            c1++;
        }else if(end1===true&&end2===false){
            m = nums2[c2];
            c2++;
        }else if(nums1[c1]<nums2[c2]){
            m = nums1[c1];
            c1++;
        }else{
            m = nums2[c2];
            c2++;
        }
        //console.log(c1, c2);
        //console.log(pm, m);
    }
    if(isodd){
        return parseInt(m,10);
    }else{
        return (pm+m)/2;
    }
};