const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const Users = require('../users/users-model');

router.post('/register', (req, res) => {});

router.post('/login', (req, res) => {
	let { username, password } = req.body;

	Users.findById({ username })
		.first()
		.then((user) => {
			if (user && bcrypt.compareSync(password, user.password)) {
				const token = generateToken(user);

				res.status(200).json({
					message: `Welcome ${user.username}!`,
					token,
				});
			} else {
				res.status(401).json({ message: 'Invalid Credentials' });
			}
		})
		.catch((error) => {
			res.status(500).json(error);
		});
});

function generateToken(user) {
	const payload = {
		subject: user.id,
		username: user.username,
	};
	const secret = 'secretfamilyrecipes';
	const option = {
		expiresIn: '8h',
	};

	return jwt.sign(payload, secret, options);
}

module.exports = router;
