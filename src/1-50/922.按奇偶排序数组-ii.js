/*
 * @lc app=leetcode.cn id=922 lang=javascript
 *
 * [922] 按奇偶排序数组 II
 */

// @lc code=start
/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParityII = function(A) {
  A.sort();
  const resArr = [];
  let even = 0;
  let odd = 1;
  A.forEach(element => {
    if (element % 2 === 0) {
      resArr[even] = element;
      even += 2;
    } else {
      resArr[odd] = element;
      odd += 2;
    }
  });

  return resArr;
};
// @lc code=end

export default sortArrayByParityII;
