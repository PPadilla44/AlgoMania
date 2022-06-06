/**
 * Definition for singly-linked list.
 */

class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}
/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
    console.log(headA, headB);
    let runnerA = headA;
    while(runnerA) {
        let runnerB = headB;
        while(runnerB) {
            if(runnerA === runnerB) {
                return runnerA;
            }
            runnerB = runnerB.next;
        }
        runnerA = runnerA.next;
    }
    return null
};

const sharedPartStart = new ListNode(8);
const shared1 = new ListNode(4);
const shared2 = new ListNode(5);
sharedPartStart.next = shared1;
shared1.next = shared2

const head1A = new ListNode(4);
const a1 = new ListNode(1)
head1A.next = a1;
a1.next = sharedPartStart

const head1B = new ListNode(5);
const b1 = new ListNode(6)
const b2 = new ListNode(1)
head1B.next = b1;
b1.next = b2;
b2.next = sharedPartStart;
// console.log(getIntersectionNode(head1A, head1B));
// Input: intersectVal = 8, listA = [4,1,8,4,5], listB = [5,6,1,8,4,5], skipA = 2, skipB = 3

const test2 = new ListNode(1);
console.log(getIntersectionNode(test2, test2));
const headA3 = new ListNode(3);
const headB3 = new ListNode(2);
headB3.next = headA3
console.log(getIntersectionNode(headA3, headB3));