const express = require('express');
const Users = require('./users-model');
const router = express.Router();

router.get('/', (req, res) => {
	Users.find()
		.then((users) => {
			res.json(users);
		})
		.catch((err) => {
			res.status(500).json({ message: 'Failed to get users' });
		});
});

router.get('/:id', (req, res) => {
	const { id } = req.params;

	Users.findById(id)
		.then((users) => {
			if (users) {
				res.json(user);
			} else {
				res.status(404).json({ message: 'Could not find user with given id.' });
			}
		})
		.catch((err) => {
			res.status(500).json({ message: 'Failed to get users' });
		});
});
router.put('/:id', (req, res) => {
	const { id } = req.params;
	const changes = req.body;

	Users.findById(id)
		.then((users) => {
			if (users) {
				Users.update(changes, id).then((updatedUsers) => {
					res.json(updatedUsers);
				});
			} else {
				res.status(404).json({ message: 'Could not find user with given id ' });
			}
		})
		.catch((err) => {
			res.status(500).json({ message: 'Failed to update user ' });
		});
});

router.delete('/:id', (req, res) => {
	const { id } = req.params;

	Users.remove(id)
		.then((deleted) => {
			if (deleted) {
				res.json({ removed: deleted });
			} else {
				res.status(404).json({ message: 'Could not find user with given id' });
			}
		})
		.catch((err) => {
			res.status(500).json({ message: 'Failed to delete user' });
		});
});

module.exports = router;
