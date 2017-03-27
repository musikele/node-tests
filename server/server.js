const express = require('express');

const app = express();

app.get('/', (req, res) => {
	res.status(404).send({
		error: 'Page not found',
		name: 'hello baby'
	});
});

app.get('/users', (req, res) => {
	let users = [{
		name : 'Michele Nasti',
		age: 32
	}, {
		name: 'Michele Criscuolo', 
		age: 35 
	}, {
		name: 'Bingo',
		age: 42
	} ];

	res.send(users)
})

app.listen(3000);
module.exports = app;