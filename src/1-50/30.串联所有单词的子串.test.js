import findSubstring from "./30.串联所有单词的子串";

test("30.串联所有单词的子串", () => {
  expect(findSubstring("", [])).toEqual([]);
});
test("30.串联所有单词的子串", () => {
  expect(findSubstring("barfoothefoobarman", ["foo", "bar"])).toEqual([0, 9]);
});

test("30.串联所有单词的子串", () => {
  expect(
    findSubstring("wordgoodgoodgoodbestword", ["word", "good", "best", "word"])
  ).toEqual([]);
});
