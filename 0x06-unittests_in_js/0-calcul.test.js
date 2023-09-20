const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  it('should return 4 when adding 1 and 3', () => {
    assert.equal(calculateNumber(1, 3), 4);
  });
  it('should return 5 when adding 1.4 and 3.7', () => {
    assert.equal(calculateNumber(1.4, 3.7), 5);
  });
  it('should return 5 when adding 1.2 and 3.7', () => {
    assert.equal(calculateNumber(1.2, 3.7), 5);
  });
  it('should return 6 when adding 1.5 and 3.7', () => {
    assert.equal(calculateNumber(1.5, 3.7), 6);
  });
  it('should return 0 when adding 0.0 and 0.0', () => {
    assert.equal(calculateNumber(0.0, 0.0), 0);
  });
  it('should return 0 when adding -0.4 and 0.4', () => {
    assert.equal(calculateNumber(-0.4, 0.4), 0);
  });
  it('should return -4 when adding -1.4 and -3.7', () => {
    assert.equal(calculateNumber(-1.4, -3.7), -5);
  });
  it('should return -5 when adding -1.2 and -3.7', () => {
    assert.equal(calculateNumber(-1.2, -3.7), -5);
  });
  it('should return -6 when adding -1.5 and -3.7', () => {
    assert.equal(calculateNumber(-1.5, -3.7), -5);
  });
  it('should return -4 when adding -1 and -3', () => {
    assert.equal(calculateNumber(-1, -3), -4);
  });
  it('should return -5 when adding -1.4 and -3.7', () => {
    assert.equal(calculateNumber(-1.4, -3.7), -5);
  });
  it('should return -5 when adding -1.2 and -3.7', () => {
    assert.equal(calculateNumber(-1.2, -3.7), -5);
  });
  it('should return -6 when adding -1.5 and -3.7', () => {
    assert.equal(calculateNumber(-1.5, -3.7), -5);
  });
  it('should return -4 when adding 0 and -4', () => {
    assert.equal(calculateNumber(0, -4), -4);
  });
  it('should return -5 when adding 0.4 and -4.4', () => {
    assert.equal(calculateNumber(0.4, -4.4), -4);
  });
});
