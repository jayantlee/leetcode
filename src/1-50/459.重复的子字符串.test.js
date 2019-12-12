import repeatedSubstringPattern from "./459.重复的子字符串";

test("459.重复的子字符串", () => {
  expect(repeatedSubstringPattern("abab")).toBe(true);
});

test("459.重复的子字符串", () => {
  expect(repeatedSubstringPattern("ababc")).toBe(false);
});
