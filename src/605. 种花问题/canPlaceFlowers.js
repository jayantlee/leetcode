/**
 思路：
 1. 处理边界问题
 2. 判断每一个坑的前一个坑和后一个坑是否有花朵种植
 */
/**
 * 605. 种花问题
 * @param flowerbed - 给予的花床
 * @param n - 能否种下的花数
 * @returns {boolean}
 */
export default function canPlaceFlowers(flowerbed, n) {
    let max = 0;
    for (let i = 0; i < flowerbed.length; i += 2) {
        if (flowerbed[i] === 0) {
            if ((i === 0 || flowerbed[i - 1] === 0) && (i === flowerbed.length - 1 || flowerbed[i + 1] === 0)) {
                max++;
                flowerbed[i] = 1;
            }
        }
    }

    return max >= n;
}