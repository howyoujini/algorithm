/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function (citations) {
    citations.sort((a, b) => b - a); 
    let h = 0;

    while (h < citations.length && citations[h] > h) {
        h++;
    }

    return h;
}

// var hIndex = function(citations) {
//     const data = {}; 

//     for (let citation of citations) {
//         data[citation] = (data[citation] || 0) + 1;
//     }

//     citations.sort((a, b) => b - a); 

//     let h = 0;
//     for (let i = 0; i < citations.length; i++) {
//         if (citations[i] > h) {
//             h++;
//         } else {
//             break;
//         }
//     }

//     return h;
// };
