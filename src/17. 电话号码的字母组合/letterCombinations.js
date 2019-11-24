export default function letterCombinations(digits) {
  const lettertMap = {
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
