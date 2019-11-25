/**
 * 1. 无重复字符的最长子串
 * 描述: 给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
export default function twoSum(nums, target) {
  const numMap = {};
  for (let i = 0; i < nums.length; i++) {
    if (numMap[nums[i]] != null) {
      return [numMap[nums[i]], i];
    } else {
      numMap[target - nums[i]] = i;
    }
  }
}

/**
 * 1. 利用map存储所需要配对的值： key为需要配对的值，value为当前值的索引
 */
