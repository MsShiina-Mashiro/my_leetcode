// 给你一个未排序的整数数组，请你找出其中没有出现的最小的正整数。

//

// 示例 1:

// 输入: [1,2,0]
// 输出: 3
// 示例 2:

// 输入: [3,4,-1,1]
// 输出: 2
// 示例 3:

// 输入: [7,8,9,11,12]
// 输出: 1
//

// 提示：

// 你的算法的时间复杂度应为O(n)，并且只能使用常数级别的额外空间。

/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function (nums) {
  let hashmap = {};
  let res = nums.length + 1;
  for (let i = 0; i < nums.length; i++) {
    hashmap[i + 1] = false;
  }
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0 && nums[i] < nums.length + 1) {
      hashmap[nums[i]] = true;
    }
  }
  for (let i = 1; i < nums.length + 1; i++) {
    if (hashmap[i] === false) res = i;
  }
  return res;
};
