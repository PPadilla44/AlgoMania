const nums1 = [1, 2, 3, 4, 5, 6, 7]
const k1 = 3;
const result1 = [5, 6, 7, 1, 2, 3, 4];

const nums2 = [-1, -100, 3, 99]
const k2 = 2;
const result2 = [3, 99, -1, -100];

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
    k %= nums.length

    let endArr = nums.splice(nums.length - k, nums.length)
    let startArr = nums.unshift(...endArr);

    console.log(nums);
};

rotate(nums1, k1)
rotate(nums2, k2)

