const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
  it('should return 5 when adding 1 and 3', () => {
    assert.equal(calculateNumber('SUM', 1, 3), 4);
  });
  it('should return 5 when adding 1.4 and 3.7', () => {
    assert.equal(calculateNumber('SUM', 1.4, 3.7), 5);
  });
  it('should return 5 when adding 1.2 and 3.7', () => {
    assert.equal(calculateNumber('SUM', 1.2, 3.7), 5);
  });
  it('should return 6 when adding 1.5 and 3.7', () => {
    assert.equal(calculateNumber('SUM', 1.5, 3.7), 6);
  });
  it('should return 0 when adding 0.0 and 0.0', () => {
    assert.equal(calculateNumber('SUM', 0.0, 0.0), 0);
  });
  it('should return 0 when adding -0.4 and 0.4', () => {
    assert.equal(calculateNumber('SUM', -0.4, 0.4), 0);
  });
  it('should return -5 when adding -1.4 and -3.7', () => {
    assert.equal(calculateNumber('SUM', -1.4, -3.7), -5);
  });
  it('should return -5 when adding -1.2 and -3.7', () => {
    assert.equal(calculateNumber('SUM', -1.2, -3.7), -5);
  });
  it('should return -6 when adding -1.5 and -3.7', () => {
    assert.equal(calculateNumber('SUM', -1.5, -3.7), -5);
  });
  it('should return -4 when adding -1 and -3', () => {
    assert.equal(calculateNumber('SUM', -1, -3), -4);
  });
  it('should return -5 when adding -1.4 and -3.7', () => {
    assert.equal(calculateNumber('SUM', -1.4, -3.7), -5);
  });
  it('should return -5 when adding -1.2 and -3.7', () => {
    assert.equal(calculateNumber('SUM', -1.2, -3.7), -5);
  });
  it('should return -6 when adding -1.5 and -3.7', () => {
    assert.equal(calculateNumber('SUM', -1.5, -3.7), -5);
  });
  it('should return -4 when adding 0 and -4', () => {
    assert.equal(calculateNumber('SUM', 0, -4), -4);
  });
  it('should return -5 when adding 0.4 and -4.4', () => {
    assert.equal(calculateNumber('SUM', 0.4, -4.4), -4);
  });
  it('should return 2 when subtracting 1 from 3', () => {
    assert.equal(calculateNumber('SUBTRACT', 3, 1), 2);
  });
  it('should return 3 when subtracting 1.4 from 3.7', () => {
    assert.equal(calculateNumber('SUBTRACT', 3.7, 1.4), 3);
  });
  it('should return 2 when subtracting 1.2 from 3.7', () => {
    assert.equal(calculateNumber('SUBTRACT', 3.7, 1.2), 3);
  });
  it('should return 2 when subtracting 1.5 from 3.7', () => {
    assert.equal(calculateNumber('SUBTRACT', 3.7, 1.5), 2);
  });
  it('should return 0 when subtracting 0.0 from 0.0', () => {
    assert.equal(calculateNumber('SUBTRACT', 0.0, 0.0), 0);
  });
  it('should return 0 when subtracting 0.4 from 0.4', () => {
    assert.equal(calculateNumber('SUBTRACT', 0.4, 0.4), 0);
  });
  it('should return -3 when subtracting -1.4 from -3.7', () => {
    assert.equal(calculateNumber('SUBTRACT', -3.7, -1.4), -3);
  });
  it('should return -3 when subtracting -1.2 from -3.7', () => {
    assert.equal(calculateNumber('SUBTRACT', -3.7, -1.2), -3);
  });
  it('should return -2 when subtracting -1 from -3', () => {
    assert.equal(calculateNumber('SUBTRACT', -3, -1), -2);
  });
  it('should return -3 when subtracting -1.4 from -3.7', () => {
    assert.equal(calculateNumber('SUBTRACT', -3.7, -1.4), -3);
  });
  it('should return -3 when subtracting -1.2 from -3.7', () => {
    assert.equal(calculateNumber('SUBTRACT', -3.7, -1.2), -3);
  });
  it('should return -4 when subtracting 0 from -4', () => {
    assert.equal(calculateNumber('SUBTRACT', -4, 0), -4);
  });
  it('should return -4 when subtracting 0.4 from -4.4', () => {
    assert.equal(calculateNumber('SUBTRACT', -4.4, 0.4), -4);
  });
  it('should return 0.5 when dividing 1 by 2', () => {
    assert.equal(calculateNumber('DIVIDE', 1, 2), 0.5);
  });
  it('should return 0.25 when dividing 1.4 by 3.7', () => {
    assert.equal(calculateNumber('DIVIDE', 1.4, 3.7), 0.25);
  });
  it('should return 0.25 when dividing 1.2 by 3.7', () => {
    assert.equal(calculateNumber('DIVIDE', 1.2, 3.7), 0.25);
  });
  it('should return 0.5 when dividing 1.5 by 3.7', () => {
    assert.equal(calculateNumber('DIVIDE', 1.5, 3.7), 0.5);
  });
  it('should return 0 when dividing 0.0 by 0.0', () => {
    assert.equal(calculateNumber('DIVIDE', 0.0, 0.0), 'Error');
  });
  it('should return 0 when dividing 0.4 by 0.4', () => {
    assert.equal(calculateNumber('DIVIDE', 0.4, 0.4), 'Error');
  });
  it('should return 2 when dividing 4 by 2', () => {
    assert.equal(calculateNumber('DIVIDE', 4, 2), 2);
  });
  it('should return -2.5 when dividing -10 by 4.3', () => {
    assert.equal(calculateNumber('DIVIDE', -10, 4.3), -2.5);
  });
  it('should return undefined when type is not SUM, SUBTRACT or DIVIDE', () => {
    assert.equal(calculateNumber('NOT_VALID', 1, 2), undefined);
  });
});
