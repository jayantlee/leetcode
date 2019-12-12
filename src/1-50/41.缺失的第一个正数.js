/*
 * @lc app=leetcode.cn id=41 lang=javascript
 *
 * [41] 缺失的第一个正数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
  nums = nums.filter(num => num > 0);

  if (nums.length === 0) return 1;
  for (let i = 0; i < nums.length; i++) {
    let minIndex = i;
    for (let j = i + 1; j < nums.length; j++) {
      minIndex = nums[j] < nums[minIndex] ? j : minIndex;
    }
    [nums[i], nums[minIndex]] = [nums[minIndex], nums[i]];
    if (i === 0 && nums[i] !== 1) {
      return 1;
    } else {
      if (nums[i] - nums[i - 1] > 1) {
        return nums[i - 1] + 1;
      }
    }
  }

  return nums.pop() + 1;
};
// @lc code=end

export default firstMissingPositive;
