const drinkAll = require('../js/sum.js');

describe('Drink all', () => {
  it('drinks something lemon-flavored', () => {
  	let drink = jest.fn();
  	drinkAll(drink, 'lemon');
    expect(drink).toHaveBeenCalled();
  });
});