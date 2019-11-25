/**
 * 1. 无重复字符的最长子串
 * 描述: 给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
export default function twoSum(nums, target) {
  const numMap = {};
  let r = [];
  for (let i = 0; i < nums.length; i++) {
    if (numMap[nums[i]] != null) {
      r = [numMap[nums[i]], i];
      break;
    } else {
      numMap[target - nums[i]] = i;
    }
  }

  return r;
}
