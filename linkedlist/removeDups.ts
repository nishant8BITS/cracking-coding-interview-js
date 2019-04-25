/**
 * Remove Duplicate: Write code to remove duplicates from an unsorted linked list
 */

import { LinkedList, ILinkedList } from "./index";

function removeDuplicate<T>(linkedList: LinkedList<T>): LinkedList<T> {
  const itemSet = new Set();

  let current = linkedList.head;
  let previousNode = linkedList.head;

  while (current) {
    if (itemSet.has(current.value)) {
      previousNode.next = current.next;
      current = current.next;
    } else {
      itemSet.add(current.value);
      previousNode = current;
      current = current.next;
    }
  }

  return linkedList;
}

let list = new LinkedList();
list.fromArray([2, 2, 3, 3, 4, 4, 5, 5, 6, 7]);
const removedList = removeDuplicate(list);
removedList.print();
