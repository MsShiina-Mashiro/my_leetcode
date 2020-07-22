// 给定一棵二叉树，想象自己站在它的右侧，按照从顶部到底部的顺序，返回从右侧所能看到的节点值。

// 示例:

// 输入: [1,2,3,null,5,null,4]
// 输出: [1, 3, 4]
// 解释:

//    1            <---
//  /   \
// 2     3         <---
//  \     \
//   5     4       <---

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

// use DFS

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
// var rightSideView = function (root) {
//   let res = [];
//   let depth = 0;
//   dfs(root, res, depth);
//   function dfs(node, res, depth) {
//     if (!node) {
//       return;
//     }
//     if (depth === res.length) {
//       res.push(node.val);
//     }
//     dfs(node.right, res, depth + 1);
//     dfs(node.left, res, depth + 1);
//   }
//   return res;
// };

// use BFS

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function (root) {
  let res = [];
  let queue = [];
  if (!root) {
    return res;
  }
  queue.push(root);
  while (queue.length) {
    const len = queue.length;
    for (let i = 0; i < len; i++) {
      let curNode = queue.shift();
      if (i === len - 1) {
        res.push(curNode.val);
      }
      if (curNode.left) {
        queue.push(curNode.left);
      }
      if (curNode.right) {
        queue.push(curNode.right);
      }
    }
  }

  return res;
};
