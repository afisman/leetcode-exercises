//Add two numbers #2

var addTwoNumbers = function (l1, l2) {
    if (!l1 && !l2) return null;
    else if (!l1) return l2;
    else if (!l2) return l1;

    let a = l1.val + l2.val;
    let p = new ListNode(a % 10);
    p.next = addTwoNumbers(l1.next, l2.next);
    if (a >= 10) p.next = addTwoNumbers(p.next, new ListNode(1))
    return p;
};