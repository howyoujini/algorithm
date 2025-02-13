/**
 * @param {number} num
 * @return {string}
 */

var intToRoman = function (num) {
    const romanNumerals = [
        ["M", 1000], ["CM", 900], ["D", 500], ["CD", 400],
        ["C", 100], ["XC", 90], ["L", 50], ["XL", 40],
        ["X", 10], ["IX", 9], ["V", 5], ["IV", 4], ["I", 1]
    ];

    let result = "";

    for (const [symbol, value] of romanNumerals) {
        while (num >= value) {
            result += symbol;
            num -= value;
        }
    }

    return result;
};

// var intToRoman = function (num) {
//     let copyNum = num;
//     const romanNumerals = { 1: "I", 4: "IV", 5: "V", 9: "IX", 10: "X", 40: "XL", 50: "L", 90: "XC", 100: "C", 400: "CD", 500: "D", 900: "CM", 1000: "M" };
//     const keys = Object.keys(romanNumerals).map(Number).sort((a, b) => b - a);
//     let answer = "";

//     for (let i = 0; i < keys.length; i++) {
//         const n = keys[i];
//         const quotient = Math.floor(copyNum / n);

//         for (let c = 0; c < quotient; c++) {
//             answer += romanNumerals[n];
//         }

//         copyNum -= n * quotient;

//         if (copyNum === 0) {
//             break;
//         }
//     }

//     return answer;
// };
