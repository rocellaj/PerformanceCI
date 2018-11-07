
exports.seed = function(knex, Promise) {

  const tableName = 'users'; 
  const date = new Date(); 

  const rows = [{
      name: 'RocellaJimenez', 
      username: 'rocella',
      email: 'rj@rj.com',
      password: 'password',
      created_at: date
    }]; 

  return knex(tableName)
    .del()
    .then(function () {
      return knex(tableName).insert(rows);
    });
};
