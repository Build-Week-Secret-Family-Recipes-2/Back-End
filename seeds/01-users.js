exports.seed = function (knex) {
	// Deletes ALL existing entries
	return knex('users')
		.truncate()
		.then(function () {
			// Inserts seed entries
			return knex('users').insert([
				{
					email: 'tester@email.com',
					username: 'test123',
					password: 'test',
					firstname: 'johnny',
					lastname: 'test',
				},
			]);
		});
};
