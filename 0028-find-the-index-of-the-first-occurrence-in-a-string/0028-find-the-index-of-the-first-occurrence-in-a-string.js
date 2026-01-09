/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    // return haystack.indexOf(needle);

    let n=haystack.length;
    let m=needle.length;
    let i=j=0;
    for(i=0;i<=n-m;i++){
        for(j=0;j<m;j++){
            if(haystack[i+j] !== needle[j]){
                break;
            }
        }
        if(j===m){
            return i;
        }
    }
    return -1;
};