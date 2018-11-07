
exports.up = function(knex, Promise) {
    return knex
    .schema
    .createTable( 'users', function( usersTable ) {
        usersTable.increments();
        usersTable.string( 'name', 50 ).notNullable();
        usersTable.string( 'username', 50 ).notNullable().unique();
        usersTable.string( 'email', 250 ).notNullable().unique();
        usersTable.string( 'password', 128 ).notNullable();
        usersTable.timestamp( 'created_at' ).notNullable();
    } )

    .createTable( 'expense', function( expenseTable ) {
        expenseTable.increments();
        expenseTable.string( 'username', 36 ).references( 'username' ).inTable( 'users' ); 
        expenseTable.string( 'type', 250 ).notNullable();
        expenseTable.integer( 'cost' ).notNullable();
        expenseTable.timestamp( 'created_at' ).notNullable();
    } );
};

exports.down = function(knex, Promise) {
   return knex
   .schema
       .dropTableIfExists( 'expense' )
       .dropTableIfExists( 'users' );
};
