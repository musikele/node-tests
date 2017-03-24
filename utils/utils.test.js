const expect = require('expect');

const utils = require('./utils');

it('should add two numbers', () => {
	let res = utils.add(33,11);

	expect(res).toBe(44).toBeA('number');

});

it('should square a number', () => {
	let res = utils.square(10);

	expect(res).toBe(100).toBeA('number');
});

it('should expect some values', () => {
	//expect(12).toNotBe(11);
	
	//check for equality of objects 
	//expect({name: 'andrew'}).toNotEqual({ name: 'Andrew' });

	expect([2,3,4]).toExclude(5);
	expect({
		name: 'Andrew',
		age: 25,
		location: 'Philadelphia'
	}).toInclude({
		age: 25
	})
});
