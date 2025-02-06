/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
    const wordArray = s.trim().split(' ');
    return wordArray.length > 0 ? wordArray[wordArray.length - 1].length : 0;
};