const sum = require('../js/sum.js');


describe('ounces per can', () => {
  it('is more than 10', () => {
    expect(11).toBeGreaterThan(10);
  });

  it('is at least 12', () => {
    expect(12).toBeGreaterThanOrEqual(12);
  });

  it('is less than 5', () => {
    expect(4).toBeLessThan(5);
  });

  it('is at least 100', () => {
    expect(100).toBeLessThanOrEqual(100);
  });
});