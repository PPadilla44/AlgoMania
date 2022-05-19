class ListNode {
    constructor(val, next) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
}

var swapPairs = function (head) {

    if (head === null || head.next === null)  {
        return head;
    }
let preservedHead = head.next;

let runner = head;

let arr = [];

while (runner !== null) {
    arr.push(runner)
    runner = runner.next;
}

for (let i = 0; i < arr.length - 1; i += 2) {
    [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
}

for (let i = 0; i < arr.length - 1; i++) {
    arr[i].next = arr[i + 1]
}

arr[arr.length - 1].next = null;


return preservedHead;
};

let test1 = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4))));
// let test1 = new ListNode(1, new ListNode(2));
console.log(swapPairs(test1));

function read(head) {
    let current = head;
    while (current !== null) {
        console.log(current.val);
        current = current.next;
    }
}