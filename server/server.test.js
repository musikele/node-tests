const request = require('supertest');
const expect = require('expect');

const app = require('./server');

describe('server', () => {

	describe('GET /', () => {
		it('should return hello world response', (done) => {
			request(app)
				.get('/')
				.expect(404)
				//supertest expect!!
				.expect((res) => {
					//expect library! 
					expect(res.body).toInclude({
						error: 'Page not found'
					})
				})
				.end(done);
		});
	});
	describe('GET /users', () => {
		it('should return my user object', (done) => {
			request(app)
				.get('/users')
				.expect(200)
				.expect((res) => {
					expect(res.body).toInclude({
						name: 'Michele Nasti',
						age: 32
					}).toBeA('array');
				})
				.end(done);
		})
	});
})