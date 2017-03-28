const expect = require('expect');

const utils = require('./utils');


describe('Utils', () => {


	describe('#add', () => {
		it('should add two numbers', () => {
			let res = utils.add(33, 11);

			expect(res).toBe(44).toBeA('number');

		});
	});


	/** 
	 * done() is the function to specify that the test must 
	 * wait for it to end the test. 
	*/
	it('should async add two numbers', (done) => {
		utils.asyncAdd(33, 11, (sum) => {
			expect(sum).toBe(44).toBeA('number');
			done();
		});
	});

	it('should square a number', () => {
		let res = utils.square(10);

		expect(res).toBe(100).toBeA('number');
	});

	it('should async square a number', (done) => {
		utils.asyncSquare(7, (square) => {
			expect(square).toBe(49).toBeA('number');
			done();
		})
	});

	it('should expect some values', () => {
		expect(12).toNotBe(11);

		//check for equality of objects 
		expect({ name: 'andrew' }).toNotEqual({ name: 'Andrew' });

		expect([2, 3, 4]).toExclude(5);
		expect({
			name: 'Andrew',
			age: 25,
			location: 'Philadelphia'
		}).toInclude({
			age: 25
		})
	});

	//should verify first and last names are set 
	// assert it incluses firstName and lastName with proper values
	it('should set firstName and lastName', () => {
		let user = { location: 'Salerno', age: 32 };
		let res = utils.setName(user, 'Michele Nasti');

		expect(res).toBeA('object').toInclude({
			firstName: 'Michele',
			lastName: 'Nasti'
		});

	});

})

