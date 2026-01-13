/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    let i = 0;
    let freq = Array(26).fill(0);
    let maxFreq = 0;
    let maxLen = 0;

    for (let j = 0; j < s.length; j++) {
        let idx = s.charCodeAt(j) - 65;
        freq[idx]++;
        maxFreq = Math.max(maxFreq, freq[idx]);

        while ((j - i + 1) - maxFreq > k) {
            freq[s.charCodeAt(i) - 65]--;
            i++;
        }

        maxLen = Math.max(maxLen, j - i + 1);
    }

    return maxLen;
};


var isWindowValid = function (map,k){
    let totalCount=0;
    let maxCount =0;
    for(let i=0;i<26;i++){
        totalCount = totalCount +map[i];
        maxCount = Math.max(maxCount,map[i]);
    }
    return (totalCount - maxCount <=k );
}