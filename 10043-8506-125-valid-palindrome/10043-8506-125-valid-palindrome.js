/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    let cleaned = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

    while (cleaned.length >= 0) {
        if (cleaned.length === 0) {
            return true;
        }

        if (cleaned[0] === cleaned[cleaned.length - 1]) {
            cleaned = cleaned.slice(1, -1);
        } else {
            return false;
        }
    }
};