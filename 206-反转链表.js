// 反转一个单链表。

// 示例:

// 输入: 1->2->3->4->5->NULL
// 输出: 5->4->3->2->1->NULL

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const reverseList = (head) => {
  if(!head || !head.next){
    return head
  }

  let pre = null
  let current = head
  while(current){
    [current.next, pre, current] = [pre, current, current.next]
  }

  return pre
}