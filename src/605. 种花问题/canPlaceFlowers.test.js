import canPlaceFlowers from "./canPlaceFlowers";

test("605. 种花问题", () => {
    expect(canPlaceFlowers([1,0,0,0,1], 1)).toBe(true)
});

test("605. 种花问题", () => {
    expect(canPlaceFlowers([1,0,0,0,1], 2)).toBe(false)
});
