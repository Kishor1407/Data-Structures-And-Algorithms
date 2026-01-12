/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if (needle.length === 0) return 0;

    const n = haystack.length;
    const m = needle.length;

    // Step 1: Build LPS array
    const lps = new Array(m).fill(0);
    let len = 0; // length of previous longest prefix suffix
    let i = 1;

    while (i < m) {
        if (needle[i] === needle[len]) {
            len++;
            lps[i] = len;
            i++;
        } else {
            if (len !== 0) {
                len = lps[len - 1];
            } else {
                lps[i] = 0;
                i++;
            }
        }
    }

    // Step 2: KMP search
    let h = 0; // index for haystack
    let p = 0; // index for needle

    while (h < n) {
        if (haystack[h] === needle[p]) {
            h++;
            p++;
        }

        if (p === m) {
            return h - p; // match found
        } else if (h < n && haystack[h] !== needle[p]) {
            if (p !== 0) {
                p = lps[p - 1];
            } else {
                h++;
            }
        }
    }

    return -1;
};


// /**
//  * @param {string} haystack
//  * @param {string} needle
//  * @return {number}
//  */
// var strStr = function(haystack, needle) {
//     // return haystack.indexOf(needle);

//     let n=haystack.length;
//     let m=needle.length;
//     let i=j=0;
//     for(i=0;i<=n-m;i++){
//         for(j=0;j<m;j++){
//             if(haystack[i+j] !== needle[j]){
//                 break;
//             }
//         }
//         if(j===m){
//             return i;
//         }
//     }
//     return -1;
// };