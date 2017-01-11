const sum = require('../js/sum.js');


class A {}


it('is instance of A', () => {
	expect(new A).toBeInstanceOf(A);
});