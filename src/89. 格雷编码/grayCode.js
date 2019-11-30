/**
 * 89. 格雷编码
 *
 * 描述：
 *
 * 格雷编码是一个二进制数字系统，在该系统中，两个连续的数值仅有一个位数的差异。
 *  给定一个代表编码总位数的非负整数 n，打印其格雷编码序列。格雷编码序列必须以 0 开头。
 *
 * 示例：
 *
 * 输入: 2
 * 输出: [0,1,3,2]
 *
 * 思路：
 *
 * 1. 利用对称性和上一次的结果是下一次的对称部分 形成递归
 */
/**
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
