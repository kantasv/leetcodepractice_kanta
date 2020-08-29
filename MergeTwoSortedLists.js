//kanta yamaoka
//submissions for
//https://leetcode.com/problems/merge-two-sorted-lists/
//2020 29th Aug

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    //when l1 or l2 is null, return the other header.
    if(!l1){
        return l2;
    }
    if(!l2){
        return l1;
    }
    //note that each list is already sorted
    //so compare the values of headers first
    if(l1.val<l2.val){
        //e.g. (1)->2->4, (2)->3->4 * ()s are the values of headers
        l1.next=mergeTwoLists(l1.next,l2);
        return l1;
    }else{
        //e.g. (1)->2->4, (1)->3->4
        //e.g. (2)->3->4, (1)->4->5
        l2.next=mergeTwoLists(l2.next,l1)
        return l2;
    }
};


//Runtime: 84 ms, faster than 82.55% of JavaScript online submissions for Merge Two Sorted Lists.
//Memory Usage: 38.8 MB, less than 23.22% of JavaScript online submissions for Merge Two Sorted Lists