// 假设按照升序排序的数组在预先未知的某个点上进行了旋转。

// ( 例如，数组 [0,1,2,4,5,6,7] 可能变为 [4,5,6,7,0,1,2] )。

// 请找出其中最小的元素。

// 注意数组中可能存在重复的元素。

// 示例 1：

// 输入: [1,3,5]
// 输出: 1
// 示例 2：

// 输入: [2,2,2,0,1]
// 输出: 0

// 把一个数组最开始的若干个元素搬到数组的末尾，我们称之为数组的旋转。输入一个递增排序的数组的一个旋转，输出旋转数组的最小元素。例如，数组 [3,4,5,1,2] 为 [1,2,3,4,5] 的一个旋转，该数组的最小值为1。

// 示例 1：

// 输入：[3,4,5,1,2]
// 输出：1
// 示例 2：

// 输入：[2,2,2,0,1]
// 输出：0

/**
 * @param {number[]} numbers
 * @return {number}
 */
var findMin = function (numbers) {
  // ES6
  // return Math.min(...numbers)
  let left = 0,
    right = numbers.length - 1;
  while (left < right) {
    // 二分法
    const temp = Math.floor(left + (right - left) / 2);
    if (numbers[temp] > numbers[right]) {
      left = temp + 1;
    } else if (numbers[temp] < numbers[right]) {
      right = temp;
    } else {
      right--;
    }
  }
  return numbers[left];
};
