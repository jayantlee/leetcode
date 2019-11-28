/**
 * 914. 卡牌分组 - https://leetcode-cn.com/problems/x-of-a-kind-in-a-deck-of-cards/
 * 描述：
 给定一副牌，每张牌上都写着一个整数。此时，你需要选定一个数字 X，使我们可以将整副牌按下述规则分成 1 组或更多组：
 每组都有 X 张牌。
 组内所有的牌上都写着相同的整数。
 仅当你可选的 X >= 2 时返回 true。
 * 思路:
 1. 遍历数组，把每个数字出现的频率保存在map中
 2. 取出map中最低频率作为 X，如果 X 小于2则直接返回 fasle，否则让map中的所有频率对 X 进行取余，所有取余都为 0 的话返回true，否则返回false
 * @param {number[]} deck - 传入的数组参数
 * @return {boolean}
 */
export default function hasGroupsSizeX(deck) {
    const map = {};
    for (let i = 0; i < deck.length; i++) {
        map[deck[i]] = map[deck[i]]? map[deck[i]]+ 1:1;
    }
    const values = Object.values(map);
    const min = Math.min.apply(null, values);
    if(min <2) return false;
    return values.every(value => value%min === 0)
};