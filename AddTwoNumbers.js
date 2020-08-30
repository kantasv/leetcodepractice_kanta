//kanta yamaoka
//submissions for
//https://leetcode.com/problems/add-two-numbers/
//2020 30th Aug

//definition of singly-linked lists
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {

    if (l1 && !l2 && l1.val >= 10) {
        return addTwoNumbers(new ListNode(0), l1)
    }
    else if (l2 && !l1 && l2.val >= 10) {
        return addTwoNumbers(new ListNode(0), l2)
    }

    if (!l1) return l2
    if (!l2) return l1

    if (l1.val + l2.val < 10) {
        l1.val = l1.val + l2.val
        l1.next = addTwoNumbers(l1.next, l2.next)
        return l1
    } else {
        l1.val = (l1.val + l2.val) % 10
        if (!l2.next) {
            //when the sum of two headers is larger than 10, and next header does not exist, e.g., [5],[5]
            //creates next list
            l2.next = new ListNode(1)
        } else {
            l2.next.val++
        }
        l1.next = addTwoNumbers(l1.next, l2.next)
        return l1
    }

};

let a1 = new ListNode(1)
let b2 = new ListNode(9)
let b1 = new ListNode(9, b2)

//testcase output
console.log(addTwoNumbers(a1, b1))


//Runtime: 112 ms, faster than 98.81% of JavaScript online submissions for Add Two Numbers.
//Memory Usage: 41.9 MB, less than 83.95% of JavaScript online submissions for Add Two Numbers.