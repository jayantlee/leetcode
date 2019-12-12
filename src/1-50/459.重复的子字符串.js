/*
 * @lc app=leetcode.cn id=459 lang=javascript
 *
 * [459] 重复的子字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {
  const reg = /^(\w+)\1+$/;
  return reg.test(s);
};
// @lc code=end

console.log(repeatedSubstringPattern("abab"));

export default repeatedSubstringPattern;
