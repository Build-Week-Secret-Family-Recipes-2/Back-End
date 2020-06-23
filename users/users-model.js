const db = require('../database/dbConfig.js');

module.exports = {
	find,
	findById,
	update,
	remove,
	insert
};

function find() {
	return db('users');
}

function findById(id) {
	return db('users').where({ id }).first();
}

async function update(changes, id) {
	return db('users').where({ id }).update(changes, '*');
}

function remove(id) {
	return db('users').where({ id }).del();
}

async function insert(user){
    const [id] = await db('users').insert(user);
    return findById(id);

}

