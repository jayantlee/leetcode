/*
 * @lc app=leetcode.cn id=30 lang=javascript
 *
 * [30] 串联所有单词的子串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function(s, words) {
  if (words.length === 0) return [];
  const l = words.length * words[0].length;
  if (s.length < l) return [];
  const map1 = {};
  let map2 = {};
  words.forEach(word => {
    map1[word] = map1[word] ? map1[word] + 1 : 1;
  });
  const r = [];
  for1: for (let i = 0; i < s.length - l + 1; i++) {
    map2 = {};
    for (let j = i; j < i + l; j += words[0].length) {
      const cur = s.slice(j, j + words[0].length);
      if (map1[cur]) {
        map2[cur] = map2[cur] ? map2[cur] + 1 : 1;
        if (map1[cur] < map2[cur]) {
          continue for1;
        }
      } else {
        continue for1;
      }
    }
    console.log(map2, map1);

    r.push(i);
  }
  return r;
};
// @lc code=end
export default findSubstring;
