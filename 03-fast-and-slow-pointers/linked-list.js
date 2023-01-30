class ListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(head = null) {
    this.head = head;
  }

  getLast () {
    let node = this.head;
    while (node.next !== null) {
      node = node.next;
    }
    return node;
  }

  getNode (n) {
    let node = this.head;
    for (let i = 0; i < n; i++) {
      node = node.next;
    }
    return node;
  }

  log () {
    let node = this.head;
    let str = '';
    while (node !== null) {
      str += `[${node.value}] -> `
      node = node.next;
    }
    str += 'null';
    console.log(str);
  }
}

const arrToLinkedList = (arr) => {
  let node = new ListNode(arr[0]);
  const ll = new LinkedList(node);
  arr.slice(1).forEach(e => {
    node.next = new ListNode(e);
    node = node.next;
  });
  return ll;
}

module.exports = {
  ListNode,
  LinkedList,
  arrToLinkedList
}