export default function twoSum(nums, target) {
  const numMap = {};
  let r = [];
  for (let i = 0; i < nums.length; i++) {
    if (numMap[nums[i]]) {
      r = [numMap[nums[i]], i];
      break;
    } else {
      numMap[target - nums[i]] = i;
    }
  }

  return r;
}
