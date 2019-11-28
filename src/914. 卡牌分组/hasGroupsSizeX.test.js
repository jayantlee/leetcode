import hasGroupsSizeX from "./hasGroupsSizeX"

test("914. 卡牌分组", () => {
    expect(hasGroupsSizeX([1,2,3,4,4,3,2,1])).toEqual(true)
});

test("914. 卡牌分组", () => {
    expect(hasGroupsSizeX([1,1,1,2,2,2,3,3])).toEqual(false)
});

test("914. 卡牌分组", () => {
    expect(hasGroupsSizeX([1])).toEqual(false)
});

test("914. 卡牌分组", () => {
    expect(hasGroupsSizeX([1,1])).toEqual(true)
});

test("914. 卡牌分组", () => {
    expect(hasGroupsSizeX([1,1,2,2,2,2])).toEqual(true)
});