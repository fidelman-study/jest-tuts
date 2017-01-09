const sum = require('../js/sum');



describe('test', function() {

	beforeAll(function() {console.log('Before Test group');});
	beforeEach(function() {console.log('Before Test');});

	it('1 + 2 to equal 3', () => {
		afterEach(() => {
			expect(sum(1,2)).toBe(3)
		});
	});

	afterEach(function() {console.log('After Test');});
	afterAll(function() {console.log('after Test group');});


});
