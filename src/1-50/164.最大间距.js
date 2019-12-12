/*
 * @lc app=leetcode.cn id=164 lang=javascript
 *
 * [164] 最大间距
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumGap = function(nums) {
  let maxGutter = 0;
  for (let index = 0; index < nums.length; index++) {
    let minIndex = index;
    for (let j = index + 1; j < nums.length; j++) {
      minIndex = nums[j] < nums[minIndex] ? j : minIndex;
    }
    [nums[index], nums[minIndex]] = [nums[minIndex], nums[index]];
    if (index > 0) {
      maxGutter =
        nums[index] - nums[index - 1] > maxGutter
          ? nums[index] - nums[index - 1]
          : maxGutter;
    }
  }

  return maxGutter;
};
// @lc code=end

export default maximumGap;
