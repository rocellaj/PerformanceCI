var express = require('express');
var router = express.Router();

/**
 * Database connection 
 */
const Pool = require('pg').Pool
const pool = new Pool({
  user: 'rocellajimenez',
  host: '127.0.0.1',
  database: 'travel',
  password: '',
  port: 5432,
})

// const getUsers = (request, response) => {
//     pool.query('SELECT * FROM users ORDER BY id ASC', (error, results) => {
//       if (error) {
//         throw error
//       }
//       response.status(200).json(results.rows)
//     })
//   }

/* GET users listing. */
router.get('/', function(req, res, next) {

  pool.query('SELECT * FROM users ORDER BY id ASC', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
 // res.send('respond with a resource');
  res.json([{
  //   id: 1,
  //   name: "Hiccup",
  //   password: 'hiccup'
  // }, {
  //   id: 2,
  //   name: "King Arthur",
  //   password: 'king-arthur'
  // }]);
});
module.exports = router;

/**
 * Database connection 
 */
// const Pool = require('pg').Pool
// const pool = new Pool({
//   user: 'rocellajimenez',
//   host: '127.0.0.1',
//   database: 'travel',
//   password: '',
//   port: 5432,
// })

// /**
//  * Database queries
//  */

// const getUsers = (request, response) => {
//     pool.query('SELECT * FROM users ORDER BY id ASC', (error, results) => {
//       if (error) {
//         throw error
//       }
//       response.status(200).json(results.rows)
//     })
//   }

//   const getExpense = (request, response) => {
//     pool.query('SELECT * FROM expense ORDER BY id ASC', (error, results) => {
//       if (error) {
//         throw error
//       }
//       response.status(200).json(results.rows)
//     })
//   }

//   /**
//    * TODO: How to get the id from the query that was just executed
//    */

//   const createExpense = (request, response) => {
//     const { username, type, cost, created_at } = request.body
//     //$(date) = new Date();

//     pool.query('INSERT INTO expense (username, type, cost, created_at) VALUES ($1, $2, $3, $4) RETURNING id', [username, type, cost, created_at], (error, results) => {
//       if (error) {
//         throw error
//       }
//       console.log (results.rows);
//       const id = results.rows;
//       response.status(201).send(id)
//     })
//   }

  // module.exports = {
  //   getUsers
  //   // getExpense,
  //   // createExpense
  // }