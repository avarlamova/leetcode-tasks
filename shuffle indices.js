/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 * Given a string s and an integer array indices of the same length.

The string s will be shuffled such that the character at the ith position moves to indices[i] in the shuffled string.

Return the shuffled string.
 */
 var restoreString = function(s, indices) {
    let res = [];
    for (let i = 0; i<s.length;i++) {
        res[indices[i]]=s[i]
    }
    return res.join('')
};


var restoreString = function(s, indices) {
    
    let res = '';
    for (let i = 0; i<s.length;i++) {
        const idx = indices.indexOf(i)
        res += s[idx];
    }
    return res
};