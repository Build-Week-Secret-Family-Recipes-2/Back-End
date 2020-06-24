const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
// const secret = require('./secret');

const Users = require('../users/users-model');

router.post('/register', async (req, res) => {
	// implement registration
	let user = req.body;
	const hash = bcrypt.hashSync(user.password, 10);
	user.password = hash;
	try {
		const newUser = await Users.insert(user);
		res.status(201).json(newUser);
	} catch (err) {
		res.status(500).json(err);
	}
});

router.post('/login', (req, res) => {
	let { username, password } = req.body;
	let authorization = req.headers;

	Users.findByFilter({ username })
		.first()
		.then((user) => {
			if (user && bcrypt.compareSync(password, user.password)) {
				const token = signToken(user);				
				res.status(200).json({
					token: token,
					message: `Welcome ${user.username}!`,
				});
			} else {
				res.status(401).json({ message: 'Invalid Credentials' });
			}
		})
		.catch((err) => {
			res.status(500).json(err);
		});
});

function signToken(user) {
	const payload = {
		username: user.username,
	};
	const secret = process.env.JWT_SECRET || 'it is a secret, is it safe?';
	const options = {
		expiresIn: '1h',
	};
	return jwt.sign(payload, secret, options);
}

module.exports = router;
