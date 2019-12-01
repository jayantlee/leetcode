/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  const numMap = {};
  for (let i = 0; i < nums.length; i++) {
    if (numMap[nums[i]] != null) {
      return [numMap[nums[i]], i];
    } else {
      numMap[target - nums[i]] = i;
    }
  }
};
// @lc code=end

export default twoSum;
