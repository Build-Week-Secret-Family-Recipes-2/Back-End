exports.seed = function (knex) {
	// Deletes ALL existing entries
	return knex('recipes')
		.del()
		.then(function () {
			// Inserts seed entries
			return knex('recipes').insert([
				{
					title: 'pancakes',
					source: 'Grandma Lily',
					ingredients: 'flour, butter, eggs, milk',
					instructions: 'mix all together then cook on stove',
					categories: 'American',
					userId: 1,
				},
			]);
		});
};
