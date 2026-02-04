var backspaceCompare = function(s, t) {
    let ss = [];
    let tt = [];

    for (let i = 0; i < s.length; i++) {
        if (s[i] === "#") {
            ss.pop();
        } else {
            ss.push(s[i]);
        }
    }

    for (let i = 0; i < t.length; i++) {
        if (t[i] === "#") {
            tt.pop();
        } else {
            tt.push(t[i]);
        }
    }

    return ss.join("") === tt.join("");
};
