import grayCode from "./grayCode";

test("89. 格雷编码", () => {
    expect(grayCode(2)).toEqual([0, 1, 3, 2])
});

test("89. 格雷编码", () => {
    expect(grayCode(0)).toEqual([0])
});