'use strict';

/**
 * // This is the Iterator's API interface.
 * // You should not implement it, or speculate about its implementation.
 * function Iterator() {
 *    @ return {number}
 *    this.next = function() { // return the next number of the iterator
 *       ...
 *    }; 
 *
 *    @return {boolean}
 *    this.hasNext = function() { // return true if it still has numbers
 *       ...
 *    };
 * };
 */

/**
 * @param {Iterator} iterator
 */
var PeekingIterator = function (iterator) {
    this.pointer = null;
    this.tester = iterator
};

/**
 * @return {number}
 */
PeekingIterator.prototype.peek = function () {
    
    return this.hasNext ? this.tester[this.pointer + 1] : null
};

/**
 * @return {number}
 */
PeekingIterator.prototype.next = function () {
    if(this.pointer === null) {
        this.pointer = 0;
        return this.tester[this.pointer]
    }
    if(this.hasNext) {
        this.pointer += 1
        return this.tester[this.pointer]
    }
    return null;
};

/**
 * @return {boolean}
 */
PeekingIterator.prototype.hasNext = function () {
    return this.pointer + 1 < this.tester.length;
};
var obj = new PeekingIterator([1,2,3])
console.log(obj);
var param_2 = obj.next()
console.log(param_2, "1");
var param_1 = obj.peek()
console.log(param_1, "2");
var param_4 = obj.next()
console.log(param_4, "2");
var param_5 = obj.next()
console.log(param_5, "3");
var param_3 = obj.hasNext()
console.log(param_3);
/** 
 * Your PeekingIterator object will be instantiated and called as such:
 * var obj = new PeekingIterator(arr)
 */