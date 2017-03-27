module.exports.add = (a,b) =>  a + b;

module.exports.asyncAdd = (a,b, callback) => {
	setTimeout(() => {
		callback(a+b);
	}, 100);
}

module.exports.square = (a) =>  a*a;

module.exports.asyncSquare = (a, callback) =>  {
	setTimeout(() => {
		callback(a*a);
	}, 100);
}

module.exports.setName = (user, fullName) => {
	let names = fullName.split(' '); 
	user.firstName = names[0];
	user.lastName = names[1];
	return user; 
}