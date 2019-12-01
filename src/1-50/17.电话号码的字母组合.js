/*
 * @lc app=leetcode.cn id=17 lang=javascript
 *
 * [17] 电话号码的字母组合
 */

// @lc code=start
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
  const lettertMap = {
    "1": "",
    "2": "abc",
    "3": "edf",
    "4": "ghi",
    "5": "jkl",
    "6": "mno",
    "7": "pqrs",
    "8": "tuv",
    "9": "wxyz"
  };

  let letters = digits.split("").map(digit => {
    return lettertMap[digit];
  });

  console.log(letters);

  if (letters.length === 0) {
    return letters;
  }

  if (letters.length === 1) {
    return letters[0].split("");
  }

  const comb = arr => {
    const r = [];
    for (let i = 0; i < arr[0].length; i++) {
      for (let j = 0; j < arr[1].length; j++) {
        r.push(`${arr[0][i]}${arr[1][j]}`);
      }
    }
    arr.splice(0, 2, r);

    if (arr.length > 1) {
      comb(arr);
    } else {
      return r;
    }

    return arr[0];
  };

  return comb(letters);
};
// @lc code=end

// console.log(letterCombinations("2"));

export default letterCombinations;
