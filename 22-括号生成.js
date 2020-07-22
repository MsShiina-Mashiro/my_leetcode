// 数字 n 代表生成括号的对数，请你设计一个函数，用于能够生成所有可能的并且 有效的 括号组合。

//

// 示例：

// 输入：n = 3
// 输出：[
//        "((()))",
//        "(()())",
//        "(())()",
//        "()(())",
//        "()()()"
//      ]

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  let res = [];
  dfs("", n, 0, 0);
  function dfs(str, n, l, r) {
    if (l === n && r === n) {
      res.push(str);
      return;
    }
    if (r > l) return;
    if (l < n) dfs(str + "(", n, l + 1, r);
    if (r < n) dfs(str + ")", n, l, r + 1);
  }
  return res;
};
