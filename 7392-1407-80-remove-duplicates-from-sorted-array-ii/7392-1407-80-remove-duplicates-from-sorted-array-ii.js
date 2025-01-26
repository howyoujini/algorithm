/**
 * @param {number[]} nums
 * @return {number}
 */
function removeDuplicates(nums) {
    let k = 0; // 결과 배열의 유효한 길이를 나타냄

    // 배열을 순회하며 중복 조건에 맞는 값을 nums의 앞부분에 배치
    for (let num of nums) {
        // 현재 인덱스가 2보다 작거나, 현재 값이 nums[k-2]보다 클 경우에만 추가
        if (k < 2 || num !== nums[k - 2]) {
            nums[k] = num;
            k++;
        }
    }

    return k; // 중복 제거 후 배열의 유효 길이 반환
}