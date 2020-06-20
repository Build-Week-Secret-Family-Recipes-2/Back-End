exports.up = function(knex) {
    //the change we want to make to our schema
    return knex.schema.createTable('recipes', tbl => {
        tbl.increments();
        tbl.text('title')
            .notNullable()
        tbl.text('source');
        tbl.text('ingredients')
             .notNullable()
        tbl.text('instructions')
             .notNullable()
        tbl.text('categories');
        tbl.integer('userId')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('users')
        
    })
  };
  
  exports.down = function(knex) {
      //undoing that change
      return knex.schema.dropTableIfExists('recipes')
    
  };