const db = require('../database/dbConfig.js');

module.exports = {
	find,
	findById,
	update,
	remove,
	insert,
	findByFilter
};

function find() {
	return db('users');
}

function findById(id) {
	return db('users').where({ id }).first();
}

function findByFilter(filter){
	return db('users').where(filter);
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

