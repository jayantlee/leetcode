import twoSum from "./1.两数之和";

test("1. 两数之和", () => {
  expect(twoSum([2, 4, 6], 10)).toEqual([1, 2]);
});

test("1. 两数之和", () => {
  expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
});
