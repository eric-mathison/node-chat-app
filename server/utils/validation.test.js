const expect = require('expect');
const {isRealString} = require('./validation');

describe('isRealString', () => {
    it('should reject non-string values', () => {
        var string = 1320;
        var res = isRealString(string);

        expect(res).toBe(false);
    });

    it('should reject sting with only spaces', () => {
        var string = '     ';
        var res = isRealString(string);

        expect(res).toBe(false);
    });

    it('should allow string with non-space characters', () => {
        var string = 'Eric';
        var res = isRealString(string);

        expect(res).toBe(true);
    });
});