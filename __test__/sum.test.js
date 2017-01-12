expect.extend({
  toBeNumber(received, expected) {
    const pass = received === expected;
    const message = () => {
    	return `${this.utils.matcherHint('toBeNumber')}
    Expected value:
      ${this.utils.printExpected(expected)} (${this.utils.getType(expected)})
    Received:
      ${this.utils.printReceived(received)} (${this.utils.getType(received)})`;
    }
    return {message, pass};
  }
});

describe('toBe5', () => {
  it('matches the number 5', () => {
    expect(5).toBeNumber(1);
  });

  it('not matches the number 5', () => {
	expect('Jest').not.toBeNumber(5);
  });
});
