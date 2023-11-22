/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
export const twoSum = function(nums, target) {
    // hash map of addition-index
    const numHashMap = new Map();

    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        const diff = target - num;

        if (numHashMap.has(diff)) {
            return [numHashMap.get(diff), i];
        }

        numHashMap.set(num, i);
    }
};