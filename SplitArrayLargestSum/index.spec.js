const splitArray = require('./index');

describe('SplitArray', () => {


    it('should pass test 1', () => {
        expect(splitArray([7,2,5,10,8], 2)).toBe(18);
    });

    it('should pass test 2', () => {

        expect(splitArray([1, 2, 3, 4, 5], 2)).toBe(9);
    });
    it('should pass test 3', () => {

        expect(splitArray([1, 4,4], 3)).toBe(4);
    });

});