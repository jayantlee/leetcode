/**
 * 3. 无重复字符的最长子串
 * 描述： 给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。
 * @param {string} s
 * @return {number}
 */
export default function lengthOfLongestSubstring(s) {
    const sub = (str) => {
        if(str.length === 1) return str;
        let longestSubstring = "";
        let nextLongestSubstring = "";
        for (let i=0;i<str.length;i++) {
            if(!longestSubstring.includes(str[i])) {
                longestSubstring += str[i];
            } else {
                nextLongestSubstring = sub(str.slice(str.indexOf(str[i])+1));
                break;
            }
        }
        return nextLongestSubstring.length > longestSubstring.length?nextLongestSubstring:longestSubstring
    };

    return sub(s).length
};