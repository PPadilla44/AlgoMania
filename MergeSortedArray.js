/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
    if (n === 0) {
        return
    }

    for (let i = 0; i < nums1.length; i++) {
        if (nums1[i] === 0) {
            if (nums2.length) {
                nums1[i] = nums2[nums2.length - 1];
                nums2.pop();
            }
        }
    }

    nums1.sort((a, b) => a - b);
    console.log(nums1);
};

console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));
console.log(merge([1], 1, [0], 0));
console.log(merge([0], 0, [1], 1));
console.log(merge([0, 0, 0, 0, 0], 0, [1, 2, 3, 4, 5], 5));
console.log(merge([-1, 0, 0, 3, 3, 3, 0, 0, 0], 6, [1, 2, 2], 3));