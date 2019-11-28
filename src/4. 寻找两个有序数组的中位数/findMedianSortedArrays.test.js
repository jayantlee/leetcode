import findMedianSortedArrays from "./findMedianSortedArrays";

test("4. 寻找两个有序数组的中位数", () => {
    expect(findMedianSortedArrays([1,3], [2])).toEqual(2.0);
});

test("4. 寻找两个有序数组的中位数", () => {
    expect(findMedianSortedArrays([1,2], [3,4])).toEqual(2.5);
});