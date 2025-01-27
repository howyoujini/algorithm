/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    const map = {};
    const majorityCount = Math.floor(nums.length / 2);

    for (let num of nums) {
        map[num] = (map[num] || 0) + 1;

        if (map[num] > majorityCount) {
            return num;
        }
    }
};