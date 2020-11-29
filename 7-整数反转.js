// 给出一个 32 位的有符号整数，你需要将这个整数中每位上的数字进行反转。

// 示例 1:

// 输入: 123
// 输出: 321
//  示例 2:

// 输入: -123
// 输出: -321
// 示例 3:

// 输入: 120
// 输出: 21

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  let string = x.toString()
  let res
  if (string[0] === '-') {
    res = string.split('')
    res.shift()
    res = res.reverse()
    res.unshift('-')
    res = res.join('')
  }else{
    res = string.split('').reverse().join('')
  }
  return res
}
