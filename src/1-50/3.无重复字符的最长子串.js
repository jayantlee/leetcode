/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let maxLen = 0;
  let longestSubstring = "";
  for (let i = 0; i < s.length; i++) {
    if (!longestSubstring.includes(s[i])) {
      longestSubstring += s[i];
      maxLen =
        longestSubstring.length > maxLen ? longestSubstring.length : maxLen;
    } else {
      longestSubstring += s[i];
      longestSubstring = longestSubstring.slice(
        longestSubstring.indexOf(s[i]) + 1
      );
    }
  }
  return maxLen;
};
// @lc code=end

export default lengthOfLongestSubstring;
