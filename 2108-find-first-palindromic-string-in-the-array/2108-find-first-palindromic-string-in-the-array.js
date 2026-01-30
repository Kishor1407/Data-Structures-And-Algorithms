/**
 * @param {string[]} words
 * @return {string}
 */
var firstPalindrome = function(words) {
    for (let k = 0; k < words.length; k++) {
        let i = 0;
        let j = words[k].length - 1;
        let isPalindrome = true;

        while (i < j) {
            if (words[k][i] !== words[k][j]) {
                isPalindrome = false;
                break;
            }
            i++;
            j--;
        }

        if (isPalindrome) return words[k];
    }
    return "";
};
