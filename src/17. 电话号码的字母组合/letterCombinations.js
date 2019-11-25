/**
 * 17. 电话号码的字母组合
 * 描述： 给定一个仅包含数字 2-9 的字符串，返回所有它能表示的字母组合。给出数字到字母的映射 `lettertMap`（与电话按键相同）。注意 1 不对应任何字母。
 *
 * @param {string} digits
 * @return {string[]}
 */
export default function letterCombinations(digits) {
  const lettertMap = {
    "1":"",
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
}
