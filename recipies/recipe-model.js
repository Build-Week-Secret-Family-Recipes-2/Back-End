const db = require('../database/dbConfig');

module.exports = {
<<<<<<< HEAD
	findAllRecipes,
	findRecipeById,
	addRecipe,
	findRecipeBy,
	updateRecipe,
	eraseRecipe,
};
=======
    findAllRecipes,
    findRecipeById,
    addRecipe,
    findRecipeBy,
    updateRecipe,
    eraseRecipe,
    findRecipeByUserId
}
>>>>>>> 5b5923ba43a5461ca65977756be7d73a800cfca2

//resolves to an array of users
function findAllRecipes() {
	return db('recipes');
}

function findRecipeBy(filter) {
	return db('recipes').where(filter);
}

//resolves to  a single user or null
<<<<<<< HEAD
function findRecipeById(id) {
	return db('recipes').where({ id }).first();
}

async function addRecipe(recipe) {
	const [id] = await db('recipes').insert(recipe);
	return findById(id);
=======
function findRecipeById(id){
    return db('recipes').where({id});

}

//resolves to  a single user or null
function findRecipeByUserId(userId){
    return db('recipes').where({userId}).first()

}


async function addRecipe(recipe){
    const [id] = await db('recipes').insert(recipe);
    return findById(id);

>>>>>>> 5b5923ba43a5461ca65977756be7d73a800cfca2
}

function updateRecipe(data, id) {
	return db('recipes').where({ id }).update(data);
}

function eraseRecipe(id) {
	return db('recipes').where({ id }).del();
}
