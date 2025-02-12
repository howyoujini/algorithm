/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
    if (needle === "") return 0;

    for (let i = 0; i <= haystack.length - needle.length; i++) { // needle의 길이만큼 비교할 수 있는 마지막 위치까지만 반복
        if (haystack.substring(i, i + needle.length) === needle) {
            return i;
        }
    }

    return -1;
};