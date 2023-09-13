// You are given the heads of two sorted linked lists list1 and list2.

// Merge the two lists into one sorted list.
// The list should be made by splicing together the nodes of the first two lists.

// Return the head of the merged linked list.

function mergeTwoLists(list1, list2) {
  let newList = new ListNode(0);
  //set head to dummy to return it at the end
  let head = newList;

  //while list1 and list2 does not equal null
  while (list1 && list2) {
    //compare values btwn lists
    if (list1.val <= list2.val) {
      //set newList next value to equal list1
      newList.next = list1;
      //then move on to the next value
      list1 = list1.next;
    } else {
      //repeat process for list2
      newList.next = list2;
      list2 = list2.next;
    }
    //remember to update newList so you can add to the tail of it
    newList = newList.next;
  }

  //one of the lists will be equal to null so you append the rest of the other list to newList
  if (list1 !== null) {
    newList.next = list1;
  } else {
    newList.next = list2;
  }

  return head.next;
}
