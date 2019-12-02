/*
 * @lc app=leetcode.cn id=93 lang=javascript
 *
 * [93] 复原IP地址
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function(s) {
  const r = [];
  let curIp = [];
  const valid = str => {
    return str[0] === "0" ? str.length === 1 : parseInt(str) <= 255;
  };

  const backtrack = (prevPos, dots) => {
    for (let curPos = prevPos + 1; curPos < prevPos + 4; curPos++) {
      const str = s.substring(prevPos + 1, curPos + 1);

      if (valid(str)) {
        curIp.push(str);
        if (dots - 1 === 0) {
          if (valid(s.substring(curPos + 1))) {
            r.push([...curIp, s.substring(curPos + 1)].join("."));
          }
        } else {
          backtrack(curPos, dots - 1);
        }
        curIp.pop();
      }
    }
  };

  backtrack(-1, 3);
  return r;
};
// @lc code=end

export default restoreIpAddresses;

console.log(restoreIpAddresses("1111"));
