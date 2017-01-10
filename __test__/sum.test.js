const sum = require('../js/sum.js');


describe('Defined variables', () => {
  it('a variable is defined', () => {
    expect(sum(0.2, 0.1)).toBeDefined();
  });
});