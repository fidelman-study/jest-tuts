const bestLaCroixFlavor = require('../js/sum.js');

describe('the best La Croix flavor', () => {
  it('is grapefruit', () => {
    expect(bestLaCroixFlavor()).toBe('grapefruit');
  });
});