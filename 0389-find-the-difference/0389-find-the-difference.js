/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    let map={};
    for(let ch of s){
       map[ch] = (map[ch] || 0)+1;
    }
    for(let ch of t){
       if (!map[ch]) return ch;
       map[ch]--;
    }
};