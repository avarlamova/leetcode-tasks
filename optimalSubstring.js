/**
 * @param {string} s
 * @return {number}
 * Given a string s, partition the string into one or more substrings such that the characters in each substring are unique. That is, no letter appears in a single substring more than once.

Return the minimum number of substrings in such a partition.

Note that each character should belong to exactly one substring in a partition.

Example 1:

Input: s = "abacaba"
Output: 4
Explanation:
Two possible partitions are ("a","ba","cab","a") and ("ab","a","ca","ba").
It can be shown that 4 is the minimum number of substrings needed.
 */
var partitionString = function(s) {
    let alreadySeen = new Set();
    let counter = 1; // string is ALWAYS non-empty

    for (const char of s) {
        if (alreadySeen.has(char)) {
            counter++;
            alreadySeen = new Set()
        }
        alreadySeen.add(char)
    }
    return counter
};

// less time and space complexity
var partitionString1 = function(s) {
    let alreadySeen = s[0];
    let counter = 1;

    for (let i = 1; i < s.length; i++) {
        const char = s[i]
        if (alreadySeen.includes(char)) {
            counter++;
            alreadySeen = char
        }
        else {
            alreadySeen += char
        }
    }
    return counter
};