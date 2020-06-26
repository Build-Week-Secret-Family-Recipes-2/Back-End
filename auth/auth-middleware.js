const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
	const { authorization } = req.headers

<<<<<<< HEAD
	if (token) {
=======
	if(authorization) {
>>>>>>> cf758eb2e7aabb384b7894f04ec3e32c58d472ea
		const secret = process.env.JWT_SECRET || 'it is a secret, is it safe?';

		jwt.verify(authorization, secret, (err, decodedToken) => {
			if (err) {
				res.status(401).json({ message: 'Invalid Token' });
			} else {
				req.decodedToken = decodedToken;
				next();
			}
		});
	} else {
		
		res.status(401).json({ message: 'Please login and try again' });
	}
};
