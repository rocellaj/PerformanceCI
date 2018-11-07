
exports.seed = function(knex, Promise) {

  const tableName = 'expense'; 
  const date = new Date(); 

  const rows = [{
      username: 'rocella',
      type: 'flight',
      cost: '1500',
      created_at: date
    }]; 

  return knex(tableName)
    .del()
    .then(function () {
      return knex(tableName).insert(rows);
    });
};
