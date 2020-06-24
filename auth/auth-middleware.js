const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
	var token = req.headers['access-token'];

	if(token) {
		const secret = process.env.JWT_SECRET || 'it is a secret, is it safe?';

		jwt.verify(token, secret, (err, decodedToken) => {
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
