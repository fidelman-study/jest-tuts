const sum = require('../js/sum');

const myBeverage = {
	delicious: true,
	sour: false
};

describe('my beverage', function() {
	it('is delicious', () => {
		expect(myBeverage.delicious).toBeTruthy();
	});

	it('is not sour', () => {
		expect(myBeverage.sour).toBeFalsy();
	});
});
