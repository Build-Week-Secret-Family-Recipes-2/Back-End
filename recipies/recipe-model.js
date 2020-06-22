const db = require('../database/dbConfig.js');


module.exports = {
    findAllRecipes,
    findRecipeById,
    addRecipe,
    findRecipeBy,
    updateRecipe,
    eraseRecipe
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
    return db('recipes').where({id}).first()

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