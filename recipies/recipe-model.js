const db = require('../database/dbConfig.js');


module.exports = {
    findAllRecipes,
    findRecipeById,
    addRecipe,
    findRecipeBy,
    updateRecipe,
    eraseRecipe,
    findRecipeByUserId
}

//resolves to an array of users
function findAllRecipes(){
    return db('recipes');

}

function findRecipeBy(filter){
    return db('recipes').where(filter);
}

//resolves to  a single user or null
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

}

function updateRecipe(data, id){
   return db('recipes').where({id}).update(data);
}

function eraseRecipe(id) {
    return db('recipes').where({id}).del();

}