import lengthOfLongestSubstring, {lengthOfLongestSubstringOld} from "./lengthOfLongestSubstring";

test("3. 无重复字符的最长子串", () => {
    expect(lengthOfLongestSubstring("abcabcbb")).toEqual(3);
});

test("3. 无重复字符的最长子串", () => {
    expect(lengthOfLongestSubstring("bbbbb")).toEqual(1);
});

test("3. 无重复字符的最长子串", () => {
    expect(lengthOfLongestSubstring("pwwkew")).toEqual(3);
});

test("3. 无重复字符的最长子串(1)", () => {
    expect(lengthOfLongestSubstringOld("abcabcbb")).toEqual(3);
});

test("3. 无重复字符的最长子串(1)", () => {
    expect(lengthOfLongestSubstringOld("bbbbb")).toEqual(1);
});

test("3. 无重复字符的最长子串(1)", () => {
    expect(lengthOfLongestSubstringOld("pwwkew")).toEqual(3);
});

test("3. 无重复字符的最长子串(1)", () => {
    expect(lengthOfLongestSubstringOld("aabaab!bb")).toEqual(3);
});
