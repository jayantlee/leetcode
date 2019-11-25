/**
 * 3. 无重复字符的最长子串
 * 描述： 给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。
 * @param {string} s
 * @return {number}
 */
export default function lengthOfLongestSubstring(s) {
    let maxLen = 0;
    let longestSubstring = "";
    for (let i = 0; i < s.length; i++) {
        if (!longestSubstring.includes(s[i])) {
            longestSubstring += s[i];
            maxLen = longestSubstring.length > maxLen ? longestSubstring.length : maxLen;
        } else {
            longestSubstring += s[i];
            longestSubstring = longestSubstring.slice(longestSubstring.indexOf(s[i]) + 1);
        }
    }
    return maxLen;

};

/**
 * 1. maxLen用来存储当前最大长度；longestSubstring存储每一次找寻到的最长字符串；
 * 2. 当遇到相同元素的时候，longestSubstring 更新为相同元素的第一个的索引的下一位开始的字符串；
 */

export function lengthOfLongestSubstringOld(s) {
    const sub = (str) => {
        if (str.length === 1) return str;
        let longestSubstring = "";
        let nextLongestSubstring = "";
        for (let i = 0; i < str.length; i++) {
            if (!longestSubstring.includes(str[i])) {
                longestSubstring += str[i];
            } else {
                nextLongestSubstring = sub(str.slice(str.indexOf(str[i]) + 1));
                break;
            }
        }
        return nextLongestSubstring.length > longestSubstring.length ? nextLongestSubstring : longestSubstring
    };

    return sub(s).length
};

/**
 * 1. longestSubstring 用来存储当前 sub 函数中找到的最大长度； nextLongestSubstring 用来存储 递归sub 返回来的值；
 * 2. 当遇到相同值的时候，sub 的参数str变为 上一sub函数的参数str 字符串中相同元素的第一个的索引的下一位开始的字符串；
 * 3. 形成递归，最后一一比较找出来的最大长度的字符串的长度返回。
 */