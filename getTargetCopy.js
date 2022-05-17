// Leet Code 1379. Find a Corresponding Node of a Binary Tree in a Clone of That Tree

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = this.right = null;
    }
}
/**
 * @param {TreeNode} original
 * @param {TreeNode} cloned
 * @param {TreeNode} target
 * @return {TreeNode}
 */

var getTargetCopy = function (original, cloned, target) {
    if (original === target) {
        return cloned;
    };

    if (original.left) {
        let found = getTargetCopy(original.left, cloned.left, target);
        if (found) {
            return found
        }
    }
    if (original.right) {
        let found = getTargetCopy(original.right, cloned.right, target);
        if (found) {
            return found
        }
    }

};



const tree = new TreeNode(7);
tree.left = new TreeNode(4);

const rightVal = new TreeNode(3)
tree.right = rightVal;

rightVal.left = new TreeNode(6)
rightVal.right = new TreeNode(19)

// console.log(getTargetCopy(tree, { ...tree }, rightVal));

const tree2 = new TreeNode(7)
// console.log(getTargetCopy(tree2, { ...tree2 }, tree2));

const test = [
    1,
    2, 3,
    4, 5, 6, 7,
    8, 9, 10];

const tree3 = new TreeNode(1);
const two = new TreeNode(2)
const three = new TreeNode(3)
const four = new TreeNode(4)
const five = new TreeNode(5)
const six = new TreeNode(6)
const seven = new TreeNode(7)
const eight = new TreeNode(8)
const nine = new TreeNode(9)
const ten = new TreeNode(10)

tree3.left = two;
tree3.right = three;
two.left = four;
two.right = five;
three.left = six;
three.right = seven;
four.left = eight;
four.right = nine;
five.left = ten;

// console.log(getTargetCopy(tree3, { ...tree3 }, five));
