/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function(letters, target) {
    const number = target.toLowerCase().charCodeAt(0) - 96;

    for (let i = number + 1; i <= 26; i++) {
        const ch = String.fromCharCode(96 + i);
        if (letters.includes(ch)) {
            return ch;
        }
    }
    return letters[0];
};
