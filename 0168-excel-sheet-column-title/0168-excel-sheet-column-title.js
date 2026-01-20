/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function(columnNumber) {
    let result = "";

    while (columnNumber > 0) {
        columnNumber--; 
        let rem = columnNumber % 26;
        result = String.fromCharCode(65 + rem) + result;
        columnNumber = Math.floor(columnNumber / 26);
    }

    return result;
};
