/**
 * @param {string} s
 * @return {boolean}
 */
// O(n)
// var isPalindrome = function (s) {
//     let cleaned = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

//     while (cleaned.length >= 0) {
//         if (cleaned.length === 0) {
//             return true;
//         }

//         if (cleaned[0] === cleaned[cleaned.length - 1]) {
//             cleaned = cleaned.slice(1, -1);
//         } else {
//             return false;
//         }
//     }
// };


// O(1)
var isPalindrome = function (s) {
    let cleaned = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    let left = 0;
    let right = cleaned.length - 1;

    while (left < right) {
        if (cleaned[left] !== cleaned[right]) {
            return false;
        }
        left++;
        right--;
    }

    return true;
};