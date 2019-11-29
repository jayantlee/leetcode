/**
 * 思路：
 * 1. 利用对称性和上一次的结果是下一次的对称部分 形成递归
 */
/**
 * 89. 格雷编码
 * @param {number} n
 * @return {number[]}
 */
export default function grayCode(n) {
    const make = (n) => {
        if (n === 1) {
            return ["0", "1"]
        }
        if (n === 0) {
            return ["0"]
        }
        const result = [];
        const pre = make(n - 1);
        const max = Math.pow(2, n) - 1;
        for (let i = 0; i < pre.length; i++) {
            result[i] = `0${pre[i]}`;
            result[max - i] = `1${pre[i]}`
        }
        return result;
    };
    const strToNum = (str) => {
        let r = 0;
        for (let i = str.length - 1; i >= 0; i--) {
            r += Math.pow(2, Number(str.length - 1 - i)) * str[i];
        }
        return r;
    };
    return make(n).map(el => {
        return strToNum(el);
    });
}
