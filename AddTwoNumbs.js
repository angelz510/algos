// You are given two non-empty linked lists representing two non-negative integers.
// The digits are stored in reverse order, and each of their nodes contains a single digit.
// Add the two numbers and return the sum as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

// Constraints
// The number of nodes in each linked list is in the range [1, 100].
// 0 <= Node.val <= 9
// It is guaranteed that the list represents a number that does not have leading zeros.

// Input: l1 = [2,4,3], l2 = [5,6,4]
let l1 = [2, 4, 3];
let l2 = [5, 6, 4];
// Output: [7,0,8]

// ------- // ------- // ------- //

// So you will need a variable that will be the sum of two integers (l1 and l2).
// You will also need a carry in case the sum is >= 10
// And lastly a new ListNode to return

var addTwoNumbers = function (l1, l2) {
  let List = new ListNode(0);
  let head = List;

  let sum = 0;
  let carry = 0;
  // while l1, l2, and sum are not null
  while (l1 !== null || l2 !== null || sum !== 0) {
    if (l1 !== null) {
      // adding the value of l1 to sum
      sum += l1.val;
      // direct pointer to next value
      l1 = l1.next;
    }
    if (l2 !== null) {
      // add this value to sum
      sum += l2.val;
      // point to the next value
      l2 = l2.next;
    }
    if (sum >= 10) {
      // if sum is > 10 carry will increase to 1
      carry = 1;
      // subtract 10 from sum
      sum = sum - 10;
    }
    // set the new ListNode to sum
    head.next = new ListNode(sum);
    head = head.next;
    sum = carry;
    carry = 0;
  }
  return List.next;
};
