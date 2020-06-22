const db = require('../database/dbConfig.js');


module.exports = {
    find,
    findById,
    add,
    findBy,
    update,
    erase
}

//resolves to an array of users
function find(){
    return db('recipes');

}

function findBy(filter){
    return db('recipes').where(filter);
}

//resolves to  a single user or null
function findById(id){
    return db('recipes').where({id}).first()

}

async function add(recipe){
    const [id] = await db('recipes').insert(recipe);
    return findById(id);

}

function update(data, id){
   return db('recipes').where({id}).update(data);
}

function erase(id) {
    return db('recipes').where({id}).del();

}