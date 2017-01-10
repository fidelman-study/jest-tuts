const bestLaCroixFlavor = require('../js/sum.js');

describe('the best La Croix flavor', () => {
  it('is not coconut', () => {
    expect(bestLaCroixFlavor()).not.toBe('coconut');
  });
});