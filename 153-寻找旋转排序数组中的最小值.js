// 假设按照升序排序的数组在预先未知的某个点上进行了旋转。

// ( 例如，数组 [0,1,2,4,5,6,7] 可能变为 [4,5,6,7,0,1,2] )。

// 请找出其中最小的元素。

// 你可以假设数组中不存在重复元素。

// 示例 1:

// 输入: [3,4,5,1,2]
// 输出: 1
// 示例 2:

// 输入: [4,5,6,7,0,1,2]
// 输出: 0


/**
 * @param {number[]} numbers
 * @return {number}
 */
var findMin = function(numbers) {
  let left = 0
  let right = numbers.length - 1
  if(numbers.length === 1) return numbers[0]
  while(left <= right) {
    let mid = Math.floor((left + right) / 2)
    if(numbers[mid] > numbers[mid + 1]) return numbers[mid+1]
    if(numbers[mid] >= numbers[left]){
      left = mid +1
    }else{
      right = mid -1
    }
    
  }
  return numbers[0]
};