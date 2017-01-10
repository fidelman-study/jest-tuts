const sum = require('../js/sum.js');
console.log(sum(0.2 + 0.1));


describe('adding numbers', () => {
  it('works sanely with simple decimals', () => {
    expect(sum(0.2, 0.1)).toBeCloseTo(0.3, 5);
  });
});