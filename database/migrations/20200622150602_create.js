
exports.up = function(knex) {
    return knex.schema.createTable('users', tbl => {
        tbl.increments();
        tbl.string('username', 128).notNullable().unique();
        tbl.string('password', 128).notNullable();
        tbl.string('email', 128).notNullable()
        tbl.string('firstName',128).notNullable()
        tbl.string('lastName',128).notNullable()
    
    })

   .createTable('recipes', tbl => {
        tbl.increments();
        tbl.text('title')
            .notNullable();
        tbl.text('source');
        tbl.text('ingredients')
             .notNullable();
        tbl.text('instructions')
             .notNullable();
        tbl.text('categories');
        tbl.integer('userId')
            .unsigned()//must be positive
            .notNullable()
            .references('id')
            .inTable('users');
        
    })
  };
  
  exports.down = function(knex) {
      //undoing that change
      //take out your shoes
      return knex.schema.dropTableIfExists('recipes')
        .dropTableIfExists('users');
    
  };