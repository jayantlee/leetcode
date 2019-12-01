import letterCombinations from "./17.电话号码的字母组合";

test("17.电话号码的字母组合", () => {
  expect(letterCombinations("23")).toEqual([
    "ae",
    "ad",
    "af",
    "be",
    "bd",
    "bf",
    "ce",
    "cd",
    "cf"
  ]);
});

test("17.电话号码的字母组合", () => {
  expect(letterCombinations("")).toEqual([]);
});
