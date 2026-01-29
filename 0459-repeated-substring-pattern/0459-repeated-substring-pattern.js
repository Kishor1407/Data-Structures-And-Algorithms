var repeatedSubstringPattern = function(s) {
    let ss = s + s;
    return ss.slice(1, ss.length - 1).includes(s);
};
