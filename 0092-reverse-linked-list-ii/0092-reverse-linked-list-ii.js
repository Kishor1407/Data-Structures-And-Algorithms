var reverseBetween = function(head, left, right) {
    if (!head || left === right) return head;

    let dummy = new ListNode(0);
    dummy.next = head;
    let prevLeft = dummy;
    for (let i = 1; i < left; i++) {
        prevLeft = prevLeft.next;
    }
    let prev = null;
    let curr = prevLeft.next;
    let count = right - left + 1;

    while (count--) {
        let next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }

    prevLeft.next.next = curr;
    prevLeft.next = prev;

    return dummy.next;
};
