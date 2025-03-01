/**
 * @param {number[]} nums
 * @return {number}
 */
function removeDuplicates(nums) {
    let k = 0; 

    for (let num of nums) {
        if (k < 2 || num !== nums[k - 2]) {
            nums[k] = num;
            k++;
        }
    }

    return k; 
}