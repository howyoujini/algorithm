/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
    const stringArray = s.trim().split(" ").filter((el) => el.length > 0);
    const answer = [];

    for (let i = 0; i < stringArray.length; i++) {
        answer[i] = stringArray[stringArray.length - 1 - i];
    }

    return answer.join(" ");
};