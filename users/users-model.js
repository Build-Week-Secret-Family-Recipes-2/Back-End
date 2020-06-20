const db = require('../database/dbConfig');

module.exports = {
	find,
	findById,
	update,
	remove,
};

function find() {
	return db('users');
}

function findById(id) {
	return db('admins').where({ id }).first();
}

async function update(changes, id) {
	return db('admins').where({ id }).update(changes, '*');
}

function remove(id) {
	return db('admins').where({ id }).del();
}
