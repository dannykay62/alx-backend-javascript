const assert = require('assert');
const calculateNumber = require('./0-calcul.js');

describe('calculateNumber', () => {
    it('this checks the output of the function', () => {
        assert.strictEqual(calculateNumber(1, 3), 4);
        assert.strictEqual(calculateNumber(1, 3.7), 5);
        assert.strictEqual(calculateNumber(1.2, 3.7), 5);
        assert.strictEqual(calculateNumber(1.5, 3.7), 6);
        assert.strictEqual(calculateNumber(3.7, 1), 5);
        assert.strictEqual(calculateNumber(3.7, 1.2), 5);
    });
    it('checks negative numbers', () => {
        assert.strictEqual(calculateNumber(-1, 1), 0);
        assert.strictEqual(calculateNumber(1, -1), 0);
        assert.strictEqual(calculateNumber(-1, -1), -2);
    });
    it('checks for arguments', () => {
        assert.strictEqual(isNaN(calculateNumber(1)), true);;
        assert.strictEqual(isNaN(calculateNumber()), true);;
    });
});